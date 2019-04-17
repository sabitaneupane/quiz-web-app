import * as React from 'react';

class Answeroptionslist extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
		return (
            <div>
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
        );
	}
}

export default Answeroptionslist;


