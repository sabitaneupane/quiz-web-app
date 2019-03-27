import * as React from 'react';
import ListQuesitons from "./ListQuestions";
import ListAnswerOptions from "./ListAnswerOptions";
import AnswerDisplay from "./AnswerDisplay";

class PlayQuiz extends React.Component{
    render() {
        return (
            <div>
                <h2> Play Quiz </h2>
                <ListQuesitons />
                <ListAnswerOptions />
                <AnswerDisplay />
            </div>
        )
    }
}

export default PlayQuiz;