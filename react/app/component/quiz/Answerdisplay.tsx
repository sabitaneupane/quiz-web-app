import * as React from 'react';

const Answerdisplay = props => {
  const { correctAnswer } = props;
  return <div className="correctAnswer text-danger">Correct ans: {correctAnswer}</div>;
};

export default Answerdisplay;
