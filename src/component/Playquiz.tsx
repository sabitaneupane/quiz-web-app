import * as React from 'react';
import '../../styles/quiz.scss';

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

    // FetchData(){
    //     const {questionsCounter,quiz_details} = this.state;

    //     fetch("https://sabitaneupane.github.io/sample-json-data/simple/quiz.json")
    //       .then(res => res.json())
    //       .then(
    //         (response) => {
    //           this.setState({
    //             quiz_details: response.quiz,
    //             totalQuestions: response.quiz.length,
    //             question_id: response.quiz[questionsCounter].question_id,
    //             question: response.quiz[questionsCounter].question,
    //             answers: response.quiz[questionsCounter].answers,
    //             correctAnswer: response.quiz[questionsCounter].correctAnswer,
    //             questionsCounter:questionsCounter+1,
    //             isLoading:false
    //           });
    //           console.log(quiz_details);
    //         }

    //     )
    // }

    FetchData(){
        const {questionsCounter} = this.state;

        const data = {  
            "quiz":[  
               {  
                  "question_id" : 1,
                  "question":"What is the scientific name of a butterfly?",
                  "answers":[  
                     "Apis",
                     "Coleoptera",
                     "Formicidae",
                     "Rhopalocera"
                  ],
                  "correctAnswer":"Rhopalocera"
               },
               {  
                  "question_id" : 2,
                  "question":"How hot is the surface of the sun?",
                  "answers":[  
                     "1,233 K",
                     "5,778 K",
                     "12,130 K",
                     "101,300 K"
                  ],
                  "correctAnswer":"5,778 K"
               },
               {  
                  "question_id" : 3,
                  "question":"Who are the actors in The Internship?",
                  "answers":[  
                     "Ben Stiller, Jonah Hill",
                     "Courteney Cox, Matt LeBlanc",
                     "Kaley Cuoco, Jim Parsons",
                     "Vince Vaughn, Owen Wilson"
                  ],
                  "correctAnswer":"Kaley Cuoco, Jim Parsons"
               },
               {  
                  "question_id" : 4,
                  "question":"What is the capital of Spain?",
                  "answers":[  
                     "Berlin",
                     "Buenos Aires",
                     "Madrid",
                     "San Juan"
                  ],
                  "correctAnswer":"Madrid"
               },
               {  
                  "question_id" : 5,
                  "question":"What is 70 degrees Fahrenheit in Celsius?",
                  "answers":[  
                     "18.8889",
                     "20",
                     "21.1111",
                     "158"
                  ],
                  "correctAnswer":"21.1111"
               },
               {  
                  "question_id" : 6,
                  "question":"What is 48,879 in hexidecimal?",
                  "answers":[  
                     "0x18C1",
                     "0xBEEF",
                     "0xDEAD",
                     "0x12D591"
                  ],
                  "correctAnswer":"0xBEEF"
               },
               {  
                  "question_id" : 7,
                  "question":"When was Mahatma Gandhi born?",
                  "answers":[  
                     "October 2, 1869",
                     "December 15, 1872",
                     "July 18, 1918",
                     "January 15, 1929"
                  ],
                  "correctAnswer":"October 2, 1869"
               },
               {  
                  "question_id" : 8,
                  "question":"How far is the moon from Earth?",
                  "answers":[  
                     "7,918 miles (12,742 km)",
                     "86,881 miles (139,822 km)",
                     "238,400 miles (384,400 km)",
                     "35,980,000 miles (57,910,000 km)"
                  ],
                  "correctAnswer":"238,400 miles (384,400 km)"
               },
               {  
                  "question_id" : 9,
                  "question":"What is 65 times 52?",
                  "answers":[  
                     "117",
                     "3120",
                     "3380",
                     "3520"
                  ],
                  "correctAnswer":"3380"
               },
               {  
                  "question_id" : 10,
                  "question":"How tall is Mount Everest?",
                  "answers":[  
                     "6,683 ft (2,037 m)",
                     "7,918 ft (2,413 m)",
                     "19,341 ft (5,895 m)",
                     "29,029 ft (8,848 m)"
                  ],
                  "correctAnswer":"29,029 ft (8,848 m)"
               },
               {  
                  "question_id" : 11,
                  "question":"When did The Avengers come out?",
                  "answers":[  
                     "May 2, 2008",
                     "May 4, 2012",
                     "May 3, 2013",
                     "April 4, 2014"
                  ],
                  "correctAnswer":"May 4, 2012"
               }
            ]
         };

         this.setState({
            quiz_details: data.quiz,
            totalQuestions: data.quiz.length,
            question_id: data.quiz[questionsCounter].question_id,
            question: data.quiz[questionsCounter].question,
            answers: data.quiz[questionsCounter].answers,
            correctAnswer: data.quiz[questionsCounter].correctAnswer,
            questionsCounter:questionsCounter+1,
            isLoading:false
          });
    }

    handleChange(evt){
        this.setState({
            selectedAns: evt.target.value
        });
    }

    handleQuizSubmitDoneButton(e){
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

    nextQuizDetails(){
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

    showButtons(){
        const {quizSubmitCompleted, isQuizCompleted} = this.state;

        if(!quizSubmitCompleted){
            return <div> <input type="submit" className="quizButton" value="Done"/>  <br/> </div>
        }else if(!isQuizCompleted){
            return <div> <br/> <button className="playButton" onClick={this.nextQuizDetails}>Next >></button> </div>
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
