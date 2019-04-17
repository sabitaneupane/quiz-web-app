import * as React from 'react';

class Answeroptionslist extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
        const {answerList, change, question_id } = this.props;
		return (
            <div>
                {
                    answerList.map(function(answer){
                        return (
                            <div key={answer} className="answerOptions"> 
                                <label className="optionsLabel"> 
                                    <input type="radio" value={answer} name={question_id} data-index={question_id}  onChange={(evt) => change(evt)}/>  
                                    &nbsp;&nbsp;{answer} 
                                </label> 
                            </div>
                        );
                    })
                }
            </div>
        );
	}
}

export default Answeroptionslist;


