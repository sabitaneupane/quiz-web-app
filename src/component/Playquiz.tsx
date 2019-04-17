import * as React from 'react';
import '../../styles/quiz.scss';

import {NavLink} from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';

class Playquiz extends React.Component<any, any> {
    constructor(props: any){
        super(props);
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
                        <div className="questionHead"> 
                            <Questionslist />                  
                        </div> <hr/>
                                                        
                        <div className="answerList"> 
                            <Answeroptionslist />
                        </div>
                                                    
                        <div className="answerDisplay"> 
                            <Answerdisplay />
                        </div>

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
