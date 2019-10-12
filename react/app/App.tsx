import * as React from 'react';
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import '../../styles/app.scss';

import { set_quiz_game } from './actions';

export const App: React.FunctionComponent = (props: any) => {
  useEffect(() => {
    props.dispatch(set_quiz_game());
  }, [])
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

export default connect(null, null)(App);
