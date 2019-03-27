import * as React from 'react';
import ListQuestions from "./ListQuestions";
import ListAnswerOptions from "./ListAnswerOptions";
import AnswerDisplay from "./AnswerDisplay";

interface IState{
  quiz_details:Object[];
}

class PlayQuiz extends React.Component<{} , IState>{
  public readonly state = {
    quiz_details: []
  };
  
  componentDidMount() {
    this.FetchData();
  }

  FetchData(){
    fetch("https://sabitaneupane.github.io/sample-json-data/simple/quiz.json")
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            quiz_details: response.quiz
          });
          console.log(this.state.quiz_details);
        }
      )
  }

  render() {
        return (
            <div className="container">
              <h1> Quiz </h1>
                <div className="pull-right">
                    <p>Total Attempt: 0 </p>
                    <input type="button" value="Try again" className="btn btn-danger" />&nbsp;
                    <input type="button" value="Show answer" className="btn btn-success"/>
                </div>
                
              <div className="clearfix"> </div> <hr/>

              <form className="form">
                <div className="row rowContainer"> 
                    <div className="col-md-4" >
                        <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2> 
                                    <ListQuestions /> 
                                    </h2>
                                </div>
                                <div className="panel-body">
                                    <ListAnswerOptions />
                                </div>
    
                               <div className="panel-footer">
                                      <AnswerDisplay  />
                                  </div>
                                 
                                </div>
                        </div>
                    </div>
    
                <div className="pull-right">
                  <input type="submit" value="Submit" className="btn btn-success btnSubmit"/>
                </div>
                
              </form>
            </div>
            
          );
    }
}

export default PlayQuiz;