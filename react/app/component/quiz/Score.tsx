import * as React from 'react';
import '../../../../styles/score.scss';

import {NavLink} from 'react-router-dom';

const Score = (props) => {
    const {scoreAchieved, totalQuestions} = props;
	return (
        <div>
            <div className="quizContainer">
                <div className="container">
                    <div className="contentWrapper">
                    <div className="scoreHead"> 
                        Total score
                    </div> 

                    <div className="quizScored">
                        <span className="scoreCircle"> {scoreAchieved} </span>
                        <span className="scoreText"> out of </span>
                        <span className="scoreCircle"> {totalQuestions} </span>
                    </div> 
            
                    <p className="paragraph"> Wanna put yourself into test again? </p>
                    <div className="playButtonWrapper">
                        <NavLink className="playButton" to="/" exact>Goto home page >> </NavLink>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;


