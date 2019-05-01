import * as React from 'react';
import '../../../styles/quiz.scss';

import {NavLink} from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';
import Score from './quiz/Score';

interface IState{
    quiz_details:Object[];
    totalQuestions:Number;
    questionsCounter:Number;
    question_id:Number;
    question:String;
    answers:Array<String>;
    correctAnswer:String;
    isQuizCompleted: Boolean;
    selectedAns: String;
    quizSubmitCompleted: Boolean;
    quizResult:Boolean;
    scoreAchieved:Number;
    isLoading:Boolean;
}

class Playquiz extends React.Component<any, IState> {

    public readonly state = {
        quiz_details: [],
        totalQuestions:0,
        questionsCounter:0,
        question_id:0,
        question:'',
        answers:[],
        correctAnswer:'',
        isQuizCompleted: false,
        selectedAns: '',
        quizSubmitCompleted: false,
        quizResult:false,
        scoreAchieved:0,
        isLoading:true
    }

    componentDidMount() {
        this.FetchData();
    }

    FetchData(){
        fetch("http://localhost:8080/api/quiz")
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                quiz_details: response.quiz,
                totalQuestions: response.quiz.length,
                isLoading:false
              });
              this.getQuizDetails()
            }
        )
    }

    handleChange = (evt) => {
        this.setState({
            selectedAns: evt.target.value
        });
    }

    handleQuizSubmitDoneButton = (e) => {
        e.preventDefault();
        const {correctAnswer, selectedAns, scoreAchieved} = this.state;

        if(correctAnswer === selectedAns){
            this.setState({
                quizResult: true,
                scoreAchieved:scoreAchieved+1
            })
        }else{
            this.setState({
                quizResult: false
            })
        }

        this.setState({
            quizSubmitCompleted:true
        })
    }

    getQuizDetails = () => {
        const {questionsCounter, totalQuestions, quiz_details} = this.state;
        
        if(questionsCounter != totalQuestions){
            this.setState({ 
                questionsCounter:questionsCounter+1,
                question_id: quiz_details[questionsCounter].question_id,
                question: quiz_details[questionsCounter].question,
                answers: quiz_details[questionsCounter].answers,
                correctAnswer: quiz_details[questionsCounter].correctAnswer,
                quizSubmitCompleted:false
            });

        }else{
            this.setState({ 
                isQuizCompleted:true
            })
        }

    }

    showButtons = () => {
        const {quizSubmitCompleted, isQuizCompleted} = this.state;

        if(!quizSubmitCompleted){
            return <div> <input type="submit" className="quizButton" value="Done"/>  <br/> </div>
        }else if(!isQuizCompleted){
            return <div> <br/> <button className="playButton" onClick={this.getQuizDetails}>Next >></button> </div>
        }else if(this.state.isQuizCompleted){
            return <div> <br/> <NavLink className="playButton" to="/score"> View score </NavLink> </div>
        }else{
            return null
        }
    }
    

	render(){
        const {
            isLoading, 
            isQuizCompleted, 
            scoreAchieved, 
            questionsCounter, 
            totalQuestions, 
            question, 
            answers, 
            question_id, 
            correctAnswer, 
            quizSubmitCompleted, 
            quizResult
        } = this.state;

		return (
            <div>
                <div className="quizContainer">

                    {
                        isLoading ?
                            <div className="contentWrapper LoadingHead"> Loading </div> 
                            :
                            <div className="container">
                        {
                            !isQuizCompleted?
                            <div className="playQuiz">
                                <div className="contentWrapper">
                                    <div className="detailscard">
                                        <div className="row">
                                        <p className="col-md-6"> Total score- <span>  {scoreAchieved} </span> </p>
                                        <p className="col-md-6"> Question no- <span>  {questionsCounter} out of {totalQuestions} </span> </p>
                                        </div>
                                    </div>
                                </div>

                                <form className="quizCard" onSubmit={this.handleQuizSubmitDoneButton}>
                                    {
                                        <div key={question_id}>
                                            <div className="questionHead"> 
                                                <Questionslist questionsList={question}/>                  
                                            </div> <hr/>
                                                                            
                                            <div className="answerList"> 
                                                <Answeroptionslist answerList={answers} question_id={question_id} change={this.handleChange}/>
                                            </div>
                                                                        
                                            {
                                                quizSubmitCompleted ? 
                                                    <div className="answerDisplay"> 
                                                        {
                                                            quizResult ? 
                                                                <div> 
                                                                    <div className="text-success"> Correct Answer </div>
                                                                </div>
                                                            :
                                                                <div>
                                                                    <div className="text-danger"> Wrong Answer </div> <br/>
                                                                    <Answerdisplay  correctAnswer={correctAnswer}/>
                                                                </div>
                                                        }
                                                        
                                                    </div>
                                                :
                                                    null
                                            }
                                        </div>    
                                    }

                                    <div className="quizButtonWrapper">
                                        {this.showButtons()}
                                    </div>
                                </form>
                            </div>
                            :
                            <div>
                                <Score scoreAchieved={scoreAchieved} totalQuestions={totalQuestions}/>
                            </div>
                        }
                    </div>
                
                    }
                    </div>
            </div>
        );
	}
}

export default Playquiz;
