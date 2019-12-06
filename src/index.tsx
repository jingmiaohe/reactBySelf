import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'highlight.js/styles/monokai-sublime.css';
import 'antd/dist/antd.css';
import './App.less';
import './css.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
