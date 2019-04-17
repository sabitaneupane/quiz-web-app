import * as React from 'react';
import '../../styles/error.scss';

import {NavLink} from 'react-router-dom';

class Error extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
		return (
            <div>
                <div className="quizContainer">
                    <div className="container"> 
                    <h1 className="mainTitle"> Page not found </h1> 
                    <div className="playButtonWrapper">
                        <NavLink className="playButton" to="/" exact>Goto home page >> </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Error;


