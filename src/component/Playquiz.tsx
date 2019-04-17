import * as React from 'react';
import '../../styles/quiz.scss';
import axios from 'axios';

import {NavLink} from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';

interface IState{
    quiz_details:Object[];
    totalQuestions:Number;
    questionsCounter:Number;
    question_id:String;
    question:String;
    answers:Array<String>;
    correctAnswer:String;
    isQuizCompleted: Boolean;
    selectedAns: String;
    quizSubmitCompleted: Boolean;
    quizResult:Boolean;
}

class Playquiz extends React.Component<any, IState> {
    constructor(props: any){
        super(props);

        this.FetchData = this.FetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.nextQuizDetails = this.nextQuizDetails.bind(this);
        this.handleQuizSubmitDoneButton = this.handleQuizSubmitDoneButton.bind(this);
        this.showButtons = this.showButtons.bind(this);
    }

    public readonly props = {
    }

    public readonly state = {
        quiz_details: [],
        totalQuestions:0,
        questionsCounter:0,
        question_id:'',
        question:'',
        answers:[],
        correctAnswer:'',
        isQuizCompleted: false,
        selectedAns: '',
        quizSubmitCompleted: false,
        quizResult:false,
    }

    componentDidMount() {
        this.FetchData();
    }

    FetchData(){
        const questionsCounter = this.state.questionsCounter;

        fetch("https://sabitaneupane.github.io/sample-json-data/simple/quiz.json")
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                quiz_details: response.quiz,
                totalQuestions: response.quiz.length,
                question_id: response.quiz[questionsCounter].question_id,
                question: response.quiz[questionsCounter].question,
                answers: response.quiz[questionsCounter].answers,
                correctAnswer: response.quiz[questionsCounter].correctAnswer,
                questionsCounter:questionsCounter+1,
              });
              console.log(this.state.quiz_details);
            }

        )
    }

    handleChange(evt){
        this.setState({
            selectedAns: evt.target.value
        });
    }

    handleQuizSubmitDoneButton(){
        const {correctAnswer, selectedAns} = this.state;

        if(correctAnswer === selectedAns){
            this.setState({
                quizResult: true
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

    nextQuizDetails(){
        const questionsCounter = this.state.questionsCounter;
        const totalQuestions = this.state.totalQuestions;
        
        if(questionsCounter != totalQuestions){
            this.setState({ 
                questionsCounter:questionsCounter+1,
                question_id: this.state.quiz_details[questionsCounter].question_id,
                question: this.state.quiz_details[questionsCounter].question,
                answers: this.state.quiz_details[questionsCounter].answers,
                correctAnswer: this.state.quiz_details[questionsCounter].correctAnswer,
                quizSubmitCompleted:false

            });
        }else{
            this.setState({ 
                isQuizCompleted:true
            })
        }

    }

    showButtons(){
        if(!this.state.quizSubmitCompleted){
            return <div> <button className="quizButton" onClick={this.handleQuizSubmitDoneButton}> Done </button><br/> </div>
        }else if(!this.state.isQuizCompleted){
            return <div> <br/> <button className="playButton" onClick={this.nextQuizDetails}>Next >></button> </div>
        }else if(this.state.isQuizCompleted){
            return <div> <br/> <NavLink className="playButton" to="/score"> View score </NavLink> </div>
        }else{
            return null
        }
    }
    

	render(){
        console.log(this.state.isQuizCompleted);
		return (
            <div>
                <div className="quizContainer">
                    <div className="container">
                        
                        <div className="contentWrapper">
                            <div className="detailscard">
                                <div className="row">
                                <p className="col-md-6"> Total score- <span>  16 </span> </p>
                                <p className="col-md-6"> Question no- <span>  {this.state.questionsCounter} out of {this.state.totalQuestions} </span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="quizCard">
                            {
                                <div key={this.state.question_id}>
                                    <div className="questionHead"> 
                                        <Questionslist questionsList={this.state.question}/>                  
                                    </div> <hr/>
                                                                    
                                    <div className="answerList"> 
                                        <Answeroptionslist answerList={this.state.answers} question_id={this.state.question_id} change={this.handleChange}/>
                                    </div>
                                                                
                                    {
                                        this.state.quizSubmitCompleted ? 
                                            <div className="answerDisplay"> 
                                                {
                                                    this.state.quizResult ? 
                                                        <div> 
                                                            <div className="text-success"> Correct Answer </div>
                                                        </div>
                                                    :
                                                        <div>
                                                            <div className="text-danger"> Wrong Answer </div> <br/>
                                                            <Answerdisplay  correctAnswer={this.state.correctAnswer}/>
                                                        </div>
                                                }
                                                
                                            </div>
                                        :
                                            <div>  </div>
                                    }
                                </div>    
                            }

                            <div className="quizButtonWrapper">
                                {this.showButtons()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Playquiz;
