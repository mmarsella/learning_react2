import React from 'react';
import ReactDOM from 'react-dom';
import App from './refactoredApp.jsx';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
