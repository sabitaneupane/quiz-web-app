import * as React from 'react';

const Answerdisplay = props => {
  const { correctAnswer } = props;
  return <div className="correctAnswer text-danger">Answer = {correctAnswer}</div>;
};

export default Answerdisplay;
