import * as React from 'react';
import ListQuestions from "./ListQuestions";
import ListAnswerOptions from "./ListAnswerOptions";
import AnswerDisplay from "./AnswerDisplay";

import '../styles/main.css';

interface IState{
  quiz_details:Object[];
  selectedAns:Array<string>;
  actual_ans: Array<string>;
  isQuizSubmitted: boolean;
  wrongAnsIndex: Array<string>;
}

class PlayQuiz extends React.Component<{} , IState>{
  constructor(props: any){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  public readonly state = {
    quiz_details: [],
    selectedAns: [],
    actual_ans: [],
    isQuizSubmitted: false,
    wrongAnsIndex: [],
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
            quiz_details: response.quiz,
            selectedAns: new Array<string>(response.quiz.length).fill('')
          });
          console.log(this.state.quiz_details);
        }
      )
  }

  handleChange(evt){
    const idx = Number(evt.target.dataset['index']);
    this.state.selectedAns[idx] = evt.target.value;
    // console.log(this.state.selectedAns);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // console.log("Selected answer : " + this.state.selectedAns);
    // console.log("Actual answer : " + this.state.actual_ans);

    var correct_ans = [];
    var wrong_ans = [];

    for(var i=0 ; i<this.state.actual_ans.length; i++){
      var acutalAns = this.state.actual_ans[i];
      var submitedAns = this.state.selectedAns[i];
      
      if(acutalAns === submitedAns){
        correct_ans.push(i);
      }else{
        wrong_ans.push(i);
      }
    }
    // console.log("right ans = "+ correct_ans);
    // console.log("wrong ans = "+ wrong_ans);  
    
    this.setState({ 
      isQuizSubmitted: true,
    });

    if (wrong_ans.length) {
      this.setState({ wrongAnsIndex: wrong_ans });
    }

  }

  actualAns(ans){
    this.state.actual_ans.push(ans);
  }

  validateAndDisplayAns(idx) {
    const { wrongAnsIndex } = this.state;
    return wrongAnsIndex.includes(idx) ? 'panel-danger' : 'panel-success';
  }

  render() {
        return (
            <div className="container">
              <h1> Quiz </h1>
              {
                this.state.isQuizSubmitted 
                ? <div className="pull-right">
                    <p>Total Attempt: 0 </p>
                    <input type="button" value="Try again" className="btn btn-danger" />&nbsp;
                    <input type="button" value="Show answer" className="btn btn-success" />
                  </div>
                : null
              }
                
              <div className="clearfix"> </div> <hr/>

              <form className="form" onSubmit={this.handleSubmit}>
                <div className="row rowContainer"> 
                  {
                    this.state.quiz_details.map((data, index) => {
                      this.actualAns(data.correctAnswer)
                      return(
                        <div className="col-md-4" key={data.question}>
                          <div  className={`panel ${this.state.isQuizSubmitted ? this.validateAndDisplayAns(index): 'panel-default'} `}>
                            <div className="panel-heading">
                                <ListQuestions questionsList={data.question}/>
                            </div>
                                
                            <div className="panel-body">
                            <ListAnswerOptions answerList={data.answers} question={data.question} index={index} change={this.handleChange}/>
                            </div>
    
                            <div className="panel-footer">
                              <AnswerDisplay correctAnswer={data.correctAnswer} />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
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