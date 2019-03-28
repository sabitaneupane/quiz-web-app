import * as React from 'react';

class ListAnswerOptions extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render() {
        const {question, answerList, change, index } = this.props;
        
        var answers = answerList.map(function(answer){
          return (
            <div key={answer}> 
              <label className="optionsLabel"> 
                  <input type="radio" value={answer} name={question} data-index={index}  onChange={(evt) => change(evt)}/>  
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