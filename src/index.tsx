import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import './util/prism/prism.js'
import './util/prism/prism.css'
import 'antd/dist/antd.css';
import './App.less';
import './css.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
