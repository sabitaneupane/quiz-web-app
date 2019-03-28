import * as React from 'react';

class ListAnswerOptions extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            answerList: this.props.answerList,
            question: this.props.question,
            index: this.props.index,
        };
    }

    render() {
        const {question, answerList, index } = this.state;
        
        var answers = answerList.map(function(answer){
          return (
            <div key={answer}> 
              <label className="optionsLabel"> 
                  <input type="radio" value={answer} name={question} data-index={index} />  
                    &nbsp;&nbsp;{answer} 
                </label> 
              </div>
          );
        });
        
        return (
            <div>
                <ul>
                    {answers}
                </ul>
            </div>
        );
    }
    
}

export default ListAnswerOptions;