import * as React from 'react';

const Questionslist = (props) => {
    const {questionsList} = props;
	return (
        <div className="questionsList">
            {questionsList}
        </div>
    );	
}

export default Questionslist;


