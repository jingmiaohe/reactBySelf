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
import HardTs from './pages/ts/hard'
import ArrTs from './pages/ts/arr'
import ClasTs from './pages/ts/clas'
import FunTs from './pages/ts/fun'
import EnumTs from './pages/ts/enum'
import FanTs from './pages/ts/fan'
import AssertTs from './pages/ts/assert'

const App: React.FC = () => {
    let routeArr = [
            {path: '/', component: CssCenter},
            {path: '/css/reset', component: CssReset},
            {path: '/css/center', component: CssCenter},
            {path: '/css/layout', component: CssLayout},
            {path: '/vue2/observeArr', component: ObserveArr},

            {path: '/ts/base', component: BaseTs},
            {path: '/ts/hard', component: HardTs},
            {path: '/ts/arr', component: ArrTs},
            {path: '/ts/clas', component: ClasTs},
            {path: '/ts/fun', component: FunTs},
            {path: '/ts/enum', component: EnumTs},
            {path: '/ts/fan', component: FanTs},
            {path: '/ts/assert', component: AssertTs}
        ];
  return (
      <Router>
        <div className="m_menu">
          <Sider>
          </Sider>
        </div>
        <div className="m_content">
            {routeArr.map((item,index)=>{
                // item子体   index下标
                // react里一般使用map遍历，通过return返回渲染代码块
                // map可用于返回符合条件的内容结合if语句
                // map不结合if判断语句则可以遍历数组，返回全部数组的内容
                return(
                    <Route exact path={item.path} component = { item.component }></Route>
                )
            })}
        </div>
      </Router>
  );
}

export default App;
