import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'highlight.js/styles/github.css';
import 'antd/dist/antd.css';
import './App.less';
import './css.less';
// 引入创建好的store实例
import { Provider } from 'react-redux'
import store from './redux/index.js'
import * as serviceWorker from './serviceWorker';

console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
