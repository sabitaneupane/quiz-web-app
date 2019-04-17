import * as React from 'react';
import '../../styles/quiz.scss';
import axios from 'axios';

import {NavLink} from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';


interface IState{
    quiz_details:Object[];
}

class Playquiz extends React.Component<any, IState> {
    constructor(props: any){
        super(props);

        this.FetchData = this.FetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    public readonly state = {
        quiz_details: []
    }

    componentDidMount() {
        this.FetchData();
    }

    FetchData(){
        fetch("https://sabitaneupane.github.io/sample-json-data/simple/quiz.json")
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                quiz_details: response.quiz,
              });
              console.log(this.state.quiz_details);
            }
          )
    }

    handleChange(evt){
        console.log(evt.target.value);
    }

	render() {
		return (
            <div>
                <div className="quizContainer">
                    <div className="container">
                        
                        <div className="contentWrapper">
                            <div className="detailscard">
                                <div className="row">
                                <p className="col-md-6"> Total score- <span>  16 </span> </p>
                                <p className="col-md-6"> Quiz attempt- <span>  16 out of 25 </span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="quizCard">
                            {
                                this.state.quiz_details.map((data, index) => {
                                    return(
                                        <div key={data.question_id}>
                                            <div className="questionHead"> 
                                                <Questionslist questionsList={data.question}/>                  
                                            </div> <hr/>
                                                                            
                                            <div className="answerList"> 
                                                <Answeroptionslist answerList={data.answers} question={data.question} index={index} change={this.handleChange}/>
                                            </div>
                                                                        
                                            <div className="answerDisplay"> 
                                                <Answerdisplay  correctAnswer={data.correctAnswer}/>
                                            </div>
                                        </div>    
                                    );
                                })
                            }

                            <div className="quizButtonWrapper">
                                <button className="quizButton"> Done</button><br/>
                                <br/> <NavLink className="playButton" to="/score">Next >></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Playquiz;
