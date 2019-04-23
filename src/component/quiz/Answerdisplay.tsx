import * as React from 'react';

const Answerdisplay = (props) => {
    const {correctAnswer} = props;
	return (
        <div>
            Correct ans: {correctAnswer} 
        </div>
    );
}

export default Answerdisplay;


