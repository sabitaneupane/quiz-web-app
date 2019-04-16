import * as React from 'react';

class AnswerDisplay extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }
    
    render() {
        return (
            <div>
                <p> <b>Correct ans:</b> <i> {this.props.correctAnswer} </i> </p>
            </div>
        )
    }
}

export default AnswerDisplay;