import * as React from 'react';

const Answeroptionslist = props => {
  const { answerList, change, question_id } = props;
  return (
    <div className="answerOptionsList">
      {answerList.map(function(answer) {
        return (
          <div key={answer} className="answerOptions">
            <label className="optionsLabel">
              <input
                type="radio"
                value={answer}
                name={question_id}
                data-index={question_id}
                required
                onChange={evt => change(evt)}
              />
              &nbsp;&nbsp;{answer}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Answeroptionslist;
