import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// For Todo-List
import AppTwo from './todoExercise/App';
// 
//For Form ex
import Murk from './forms/formEx1';

ReactDOM.render(<AppTwo />, document.getElementById('root'));
registerServiceWorker();
