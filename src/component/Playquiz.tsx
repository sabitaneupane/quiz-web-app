import * as React from 'react';
import '../../styles/quiz.scss';

import {NavLink} from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';
import Score from './quiz/Score';

const quiz_data = {  
    "quiz":{  
       "IQ":[  
          {  
             "question_id" : 1,
             "question": "Grand Central Terminal, Park Avenue, New York is the world's",
             "answers": [
               "largest railway station",
               "highest railway station",
               "longest railway station",
               "None of the above"
             ],
             "correctAnswer": "largest railway station"
          },
          {  
             "question_id" : 2,
             "question": "Epsom (England) is the place associated with",
             "answers": [
               "Horse racing",
               "Polo",
               "Shooting",
               "Snooker"
             ],
             "correctAnswer": "Horse racing"
          },
          {  
             "question_id" : 3,
             "question": "Country that was called as Land of Rising Sun ?",
             "answers": [
               "Russia",
               "Japan",
               "Korea",
               "Holland"
             ],
             "correctAnswer": "Japan"
          },
          {  
             "question_id" : 4,
             "question": "Deficiency of Iron leads to ?",
             "answers": [
               "Rickets",
               "Malaria",
               "Dental Cavity",
               "Anaemia"
             ],
             "correctAnswer": "Anaemia"
          },
          {  
             "question_id" : 5,
             "question": "'One People, One State, One leader' was the policy of ?",
             "answers": [
               "Stalin",
               "Hitler",
               "Lenin",
               "Mussolin"
             ],
             "correctAnswer": "Hitler"
          },
          {  
             "question_id" : 6,
             "question": "Headquarters of UNO are situated at",
             "answers": [
               "New York, USA",
               "Hague (Netherlands)",
               "Geneva",
               "Paris"
             ],
             "correctAnswer": "New York, USA"
          },
          {  
             "question_id" : 7,
             "question": "The value of Gold is determined in",
             "answers": [
               "Rome",
               "Washington",
               "Teheran",
               "London"
             ],
             "correctAnswer": "London"
          },
          {  
             "question_id" : 8,
             "question": "Fax machine was invented by ?",
             "answers": [
               "Daimler",
               "Dewar",
               "Bain",
               "None of these"
             ],
             "correctAnswer": "Bain"
          },
          {  
             "question_id" : 9,
             "question": "When is the World AIDS Day observed all over the world?",
             "answers": [
               "1st octomber",
               "1st December",
               "12th December",
               "12th November"
             ],
             "correctAnswer": "1st December"
          },
          {  
             "question_id" : 10,
             "question": "When was the Air Mail service introduced?",
             "answers": [
               "1879",
               "1907",
               "1911",
               "1935"
             ],
             "correctAnswer": "1907"
          }
       ],
       "Sports":[  
          {  
             "question_id" : 1,
             "question": "2010 Commonwealth Games held in ?",
             "answers": [
               "Canada",
               "India",
               "Britian",
               "Malaysia"
             ],
             "correctAnswer": "India"
          },
          {  
             "question_id" : 2,
             "question": "The term“Googly” is associated with ?",
             "answers": [
               "Cricket",
               "Football",
               "Badminton",
               "Hockey"
             ],
             "correctAnswer": "Cricket"
          },
          {  
             "question_id" : 3,
             "question": "In 1924 the first winter Olympics was held in ?",
             "answers": [
               "Italy",
               "France",
               "Austria",
               "Canada"
             ],
             "correctAnswer": "France"
          },
          {  
             "question_id" : 4,
             "question": "The ASIAD is held every ?",
             "answers": [
               "3 years",
               "4 years",
               "5 years",
               "6 years"
             ],
             "correctAnswer": "4 years"
          },
          {  
             "question_id" : 5,
             "question": "2010 World Cup football tournament was held in?",
             "answers": [
               "Austria",
               "Germany",
               "South Africa",
               "Turin"
             ],
             "correctAnswer": "South Africa"
          },
          {  
             "question_id" : 6,
             "question": "The maximum number of Gold medals in Olympics 2008 was won by ?",
             "answers": [
               "China",
               "France",
               "U.S.A.",
               "S.Korea"
             ],
             "correctAnswer": "U.S.A."
          },
          {  
             "question_id" : 7,
             "question": "The head quarters of International Olympic Committee is at ?",
             "answers": [
               "Los Angles",
               "New York",
               "Moscow",
               "Lausanne(Switzerland)"
             ],
             "correctAnswer": "Lausanne(Switzerland)"
          },
          {  
             "question_id" : 8,
             "question": "World’s most ancient game is ?",
             "answers": [
               "Boxing",
               "Running",
               "Wrestling",
               "Swimming"
             ],
             "correctAnswer": "Wrestling"
          },
          {  
             "question_id" : 9,
             "question": "The game of hockey originated in ?",
             "answers": [
               "France",
               "Canada",
               "England",
               "Germany"
             ],
             "correctAnswer": "France"
          },
          {  
             "question_id" : 10,
             "question": "Which country won the Cricket World Cup in 1999?",
             "answers": [
               "Australia",
               "South Africa",
               "Pakistan",
               "England"
             ],
             "correctAnswer": "Australia"
          }
       ],
       "Science":[  
          {  
             "question_id" : 1,
             "question": "Entomology is the science that studies",
             "answers": [
               "Behavior of human beings",
               "Insects",
               "The origin and history of technical and scientific terms",
               "The formation of rocks"
             ],
             "correctAnswer": "Insects"
          },
          {  
             "question_id" : 2,
             "question": "Fathometer is used to measure",
             "answers": [
               "Earthquakes",
               "Rainfall",
               "Ocean depth",
               "Sound intensity"
             ],
             "correctAnswer": "Ocean depth"
          },
          {  
             "question_id" : 3,
             "question": "Eugenics is the study of",
             "answers": [
               "altering human beings by changing their genetic components",
               "people of European origin",
               "different races of mankind",
               "genetic of plants"
             ],
             "correctAnswer": "altering human beings by changing their genetic components"
          },
          {  
             "question_id" : 4,
             "question": "The metal whose salts are sensitive to light is ?",
             "answers": [
               "Zinc",
               "Silver",
               "Copper",
               "Aluminium"
             ],
             "correctAnswer": "Silver"
          },
          {  
             "question_id" : 5,
             "question": "Which soil is suitable for agriculture ?",
             "answers": [
               "Red soil",
               "Sand",
               "Black soil",
               "Peaty soil"
             ],
             "correctAnswer": "Peaty soil"
          },
          {  
             "question_id" : 6,
             "question": "The chemical name of Chloroform is ?",
             "answers": [
               "Sulphuric acid",
               "Sodium Chloride",
               "Sodium Carbonate",
               "Trichloromethane"
             ],
             "correctAnswer": "Trichloromethane"
          },
          {  
             "question_id" : 7,
             "question": "The chief ore of Aluminium is ?",
             "answers": [
               "Iron",
               "Cryolite",
               "Bauxite",
               "Haematite"
             ],
             "correctAnswer": "Bauxite"
          },
          {  
             "question_id" : 8,
             "question": "Neutron was discovered by",
             "answers": [
               "Marie Curie",
               "Mendeleef",
               "Rutherford",
               "Chadwick"
             ],
             "correctAnswer": "Chadwick"
          },
          {  
             "question_id" : 9,
             "question": "Who discovered oxygen?",
             "answers": [
               "Lavoisier",
               "Joseph Priestley",
               "Dalton",
               "Swinton"
             ],
             "correctAnswer": "Joseph Priestley"
          },
          {  
             "question_id" : 10,
             "question": "The first manned satellite which U.S.S.R. has put into orbit was on",
             "answers": [
               "1961",
               "1957",
               "1972",
               "1951"
             ],
             "correctAnswer": "1961"
          }
       ],
       "Programming":[  
          {  
             "question_id" : 1,
             "question": "The____condition allows a general predicate over the relations being joined.",
             "answers": [
               "On",
               "Using",
               "Set",
               "Where"
             ],
             "correctAnswer": "On"
          },
          {  
             "question_id" : 2,
             "question": "The function ____ obtains block of memory dynamically.",
             "answers": [
               "calloc",
               "malloc",
               "Both a & b",
               "free"
             ],
             "correctAnswer": "Both a & b"
          },
          {  
             "question_id" : 3,
             "question": "The keyword ‘break’ cannot be simply used within:",
             "answers": [
               "do-while",
               "if-else",
               "for",
               "while"
             ],
             "correctAnswer": "if-else"
          },
          {  
             "question_id" : 4,
             "question": "Which data type is most suitable for storing a number 65000 in a 32-bit system?",
             "answers": [
               "short",
               "int",
               "long",
               "double"
             ],
             "correctAnswer": "short"
          },
          {  
             "question_id" : 5,
             "question": "What type of join is needed when you wish to include rows that do not have matching values?",
             "answers": [
               "Equi-join",
               "Natural join",
               "Outer join",
               "All of the mentioned"
             ],
             "correctAnswer": "Outer join"
          },
          {  
             "question_id" : 6,
             "question": "The primary tool used in structured design is a:",
             "answers": [
               "module",
               "structure chart",
               "data-flow diagram",
               "program flowchart"
             ],
             "correctAnswer": "structure chart"
          },
          {  
             "question_id" : 7,
             "question": "What steps are in Continuous Integration?",
             "answers": [
               "Compilation",
               "Unit Tests",
               "Code Quality Gates",
               "All of these"
             ],
             "correctAnswer": "All of these"
          },
          {  
             "question_id" : 8,
             "question": "Create table employee (name varchar ,id integer) What type of statement is this ?",
             "answers": [
               "DML",
               "DDL",
               "View",
               "Integrity constraint"
             ],
             "correctAnswer": ""
          },
          {  
             "question_id" : 9,
             "question": "Find what is the unit of measurement that is used to measure the size of a user story for an Agile project?",
             "answers": [
               "Function points",
               "Story points",
               "Work breakdown points",
               "Velocity points"
             ],
             "correctAnswer": "Story points"
          },
          {  
             "question_id" : 10,
             "question": "Updates that violate __________ are disallowed.",
             "answers": [
               "Integrity constraints",
               "Transaction control",
               "Authorization",
               "DDL constraints"
             ],
             "correctAnswer": "Integrity constraints"
          }
       ],
       "Literature":[  
          {  
             "question_id" : 1,
             "question": "Who was the author of the famous storybook 'Alice's Adventures in Wonderland'?",
             "answers": [
               "Rudyard Kipling",
               "John Keats",
               "Lewis Carroll",
               "H G Wells"
             ],
             "correctAnswer": "Lewis Carroll"
          },
          {  
             "question_id" : 2,
             "question": "Who wrote the famous 1855 poem 'The Charge of the Light Brigade'?",
             "answers": [
               "Lord Alfred Tennyson",
               "Christopher Marlowe",
               "Johannes Gutenberg",
               "René Descartes"
             ],
             "correctAnswer": "Lord Alfred Tennyson"
          },
          {  
             "question_id" : 3,
             "question": "Who wrote 'Where ignorance is bliss, it is folly to be wise'?",
             "answers": [
               "Browning",
               "Marx",
               "Shakespeare",
               "Kipling"
             ],
             "correctAnswer": "Shakespeare"
          },
          {  
             "question_id" : 4,
             "question": "Name the book which opens with the line 'All children, except one grew up'?",
             "answers": [
               "The Railway Children",
               "Winnie the Poo",
               "Jungle book",
               "Peter Pan"
             ],
             "correctAnswer": "Peter Pan"
          },
          {  
             "question_id" : 5,
             "question": "Which is the first Harry Potter book?",
             "answers": [
               "HP and the Goblet of Fire",
               "HP and the Philosopher’s Stone",
               "HP and the Chamber of Secrets",
               "HP and the God of small Things"
             ],
             "correctAnswer": "HP and the Philosopher’s Stone"
          },
          {  
             "question_id" : 6,
             "question": "In which century were Geoffrey Chaucer's Canterbury Tales written?",
             "answers": [
               "13th – 14th",
               "14th – 15th",
               "15th - 16th",
               "16th – 17th"
             ],
             "correctAnswer": "13th – 14th"
          },
          {  
             "question_id" : 7,
             "question": "What was the nationality of Robert Louis Stevenson, writer of 'Treasure Island'?",
             "answers": [
               "Scottish",
               "Welsh",
               "Irish",
               "French"
             ],
             "correctAnswer": "Scottish"
          },
          {  
             "question_id" : 8,
             "question": "'Jane Eyre' was written by which Bronte sister?",
             "answers": [
               "Anne",
               "Charlotte",
               "Emily",
               "None of the above"
             ],
             "correctAnswer": "Charlotte"
          },
          {  
             "question_id" : 9,
             "question": "What is the book 'Lord of the Flies' about?",
             "answers": [
               "A round trip around the USA",
               "A swarm of killer flies",
               "Schoolboys on the desert island",
               "None of the above"
             ],
             "correctAnswer": "Schoolboys on the desert island"
          },
          {  
             "question_id" : 10,
             "question": "In the book ‘the Lord of the Rings ‘, who or what is Bilbo?",
             "answers": [
               "Dwarf",
               "Wizard",
               "Hobbit",
               "Troll"
             ],
             "correctAnswer": "Hobbit"
          }
       ]
    }
 };
 

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

    FetchData = () => {
        const {questionsCounter} = this.state;
        const data = quiz_data;

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

    nextQuizDetails = () => {
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
