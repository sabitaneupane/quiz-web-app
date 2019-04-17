import * as React from 'react';
import '../../styles/score.scss';

import {NavLink} from 'react-router-dom';

class Home extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
		return (
            <div>
                <div className="quizContainer">
                    <div className="container">
                        <div className="contentWrapper">
                        
                        <div className="scoreHead"> 
                            Total score
                        </div> 

                        <div className="quizScored">
                            <span className="scoreCircle"> 15 </span>
                            <span className="scoreText"> out of </span>
                            <span className="scoreCircle"> 18 </span>
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
}

export default Home;


