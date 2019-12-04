import React from 'react'
// import { Button } from 'antd';   //按需引入即可
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Sider from './components/menu'

// css 部分
import CssReset from './pages/cssReset'
import CssCenter from './pages/cssCenter'
import CssLayout from './pages/cssLayout'

// vue2 部分
import ObserveArr from './pages/vue2/observeArr'
// import Mvvm from './pages/vue2/mvvm'

// ts 部分
import BaseTs from './pages/ts/base'

const App: React.FC = () => {
  return (
      <Router>
        <div className="m_menu">
          <Sider>
          </Sider>
        </div>
        <div className="m_content">

            {/*css*/}
          <Route exact path="/" component = { CssCenter }></Route>
          <Route exact path="/css/reset" component = { CssReset }></Route>
          <Route exact path="/css/center" component = { CssCenter }></Route>
          <Route exact path="/css/layout" component = { CssLayout }></Route>

            {/*vue2*/}
          <Route exact path="/vue2/observeArr" component = { ObserveArr }></Route>
          {/*<Route exact path="/vue2/mvvm" component = { Mvvm }></Route>*/}

            {/*ts*/}
           <Route exact path="/ts/base" component = { BaseTs }></Route>
        </div>
      </Router>
  );
}

export default App;
