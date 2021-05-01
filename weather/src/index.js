import React from 'react';
import ReactDOM from 'react-dom';

import App from "../src/App.component"

import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"



ReactDOM.render(
  <React.StrictMode>
    <div>
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

