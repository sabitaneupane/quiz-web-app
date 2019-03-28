import * as React from 'react';

class AnswerDisplay extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            answer: this.props.correctAnswer
        };
    }
    
    render() {
        return (
            <div>
                <p> <b>Correct ans:</b> <i> {this.state.answer} </i> </p>
            </div>
        )
    }
}

export default AnswerDisplay;