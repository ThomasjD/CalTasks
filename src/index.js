import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import ThemeSwitcher from './components/ThemeSwitcher';

ReactDOM.render(
  <App passData={'I am here'} />,
  document.getElementById('root')
);
registerServiceWorker();
//appTitle = 'CalTasks'
