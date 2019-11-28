import React from 'react'
// import { Button } from 'antd';   //按需引入即可
import {BrowserRouter as Router , Route} from 'react-router-dom';
import CssReset from './pages/cssReset'
import CssCenter from './pages/cssCenter'
import CssLayout from './pages/cssLayout'

import ObserveArr from './pages/vue2/observeArr'
import Sider from './components/menu'

const App: React.FC = () => {
  return (
      <Router>
        <div className="m_menu">
          <Sider>
          </Sider>
        </div>
        <div className="m_content">
          <Route exact path="/" component = { CssCenter }></Route>
          <Route exact path="/css/reset" component = { CssReset }></Route>
          <Route exact path="/css/center" component = { CssCenter }></Route>
          <Route exact path="/css/layout" component = { CssLayout }></Route>
          <Route exact path="/vue2/observeArr" component = { ObserveArr }></Route>
        </div>
      </Router>
  );
}

export default App;
