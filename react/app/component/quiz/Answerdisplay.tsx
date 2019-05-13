import * as React from 'react';

const Answerdisplay = (props) => {
    const {correctAnswer} = props;
	return (
        <div className="correctAnswer">
            Correct ans: {correctAnswer} 
        </div>
    );
}

export default Answerdisplay;


