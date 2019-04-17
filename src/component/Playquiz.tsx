import * as React from 'react';
import '../../styles/quiz.scss';

import {NavLink} from 'react-router-dom';

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
                        How hot is the surface of the sun? 
                        </div> <hr/>
                                                        
                            <div className="answerList"> 
                                <div className="answerOptions"> 
                                <label className="optionsLabel"> 
                                    <input type="radio" name="answer"/>  1,233 K  
                                </label>
                                </div>

                                <div className="answerOptions"> 
                                <label className="optionsLabel"> 
                                    <input type="radio" name="answer"/>  5,778 K  
                                </label>
                                </div>

                                <div className="answerOptions"> 
                                <label className="optionsLabel"> 
                                    <input type="radio" name="answer"/> 12,130 K  
                                </label>
                                </div>

                                <div className="answerOptions"> 
                                <label className="optionsLabel"> 
                                    <input type="radio" name="answer"/> 101,300 K 
                                </label>
                                </div>
                            
                            </div>
                                                    
                            <div className="answerDisplay"> 
                            Correct ans: 5,778 K
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
