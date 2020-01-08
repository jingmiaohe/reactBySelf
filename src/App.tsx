import React, { Suspense } from 'react'
// import { Button } from 'antd';   //按需引入即可
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Sider from './components/menu'

let routerList:any[] = [];
function importAll(r: any) {
   r.keys().forEach((item: string) => {
       routerList = routerList.concat(r(item).default)
   })
}

importAll(require.context('./router',true,/\.router\.ts/))

const App: React.FC = () => {
    let routeArr = [
        ...routerList
        ];
    routeArr = routerList;
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
                    <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path={item.path} component = { item.component }></Route>
                    </Suspense>
                )
            })}
        </div>
      </Router>
  );
}

export default App;
