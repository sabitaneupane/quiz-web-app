import * as React from 'react';
import '../../styles/app.scss';

import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="quizContainer">
        <div className="container">
          <h1 className="mainTitle"> QUIZ GAMES </h1>
          <h3 className="subTitle">We present quizzes that will entertain and excite you.</h3>
          <hr />
          <p className="paragraph"> Test Your Knowledge with different Quizzes!</p>
          <div className="playButtonWrapper">
            <NavLink className="playButton" to="/playquiz">
              Play Game
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
