import * as React from "react";
import * as ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';

ReactDOM.render(
    <BrowserRouter> 
        <Routes /> 
    </BrowserRouter>,
    document.getElementById("index")
);
