import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Viewer from './components/Viewer'
import reportWebVitals from './reportWebVitals';

const pathMapper = (path) => {
  switch(path) {
    case '/viewer' :
      return (<Viewer/>)
    default :
      return (<App/>)
  }
}

ReactDOM.render(
  <React.StrictMode>
    {
      pathMapper(document.location.pathname)
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
