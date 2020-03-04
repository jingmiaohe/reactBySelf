import React from 'react'
import axios from 'axios';
import qs from 'qs';
import Sider from './components/menu'
import Editor from './components/editor'
import Header from './components/header'
import { setCurrentNode } from './redux/actions.js'

import { connect } from 'react-redux'

interface AppProps {
    setCurrentNode: Function
}

interface AppState{
    defaultContent: string,
    curMenuId: string
}

// 添加工具条 保存信息等
class App extends React.Component<AppProps,AppState> {
    constructor(props:any){
        super(props)
    }
     readonly state = {
         defaultContent: '',
         curMenuId: '',
    }
    // 查询 当前点击的 目录的 编辑页内容
    getCurContent = (id:string, type:string)=> {
        this.setState({
            curMenuId: id
        })
        // 提交 current node id
        this.props.setCurrentNode(id,type);
        if (type === '1') {
            axios.post('/api/content',qs.stringify({id: id})).then(res => {
                if (res.data.code === 0){
                    this.setState({
                        defaultContent: res.data.data?res.data.data.content:''
                    })
                }
            })
        }
    }

render() {
  return (
      <React.Fragment>
            <div className="noteHeader">
                <Header></Header>
            </div>
              <div className="noteContent">
                  <div className="m_menu">
                      <Sider getCurContent={this.getCurContent}>
                      </Sider>
                  </div>
                  <div className="m_content">
                      <Editor defaultContent={this.state.defaultContent}></Editor>
                  </div>
              </div>
      </React.Fragment>
  );
}
}
// 没有使用
const mapStateToProps = (state: any) => {
    return {
    }
}
 // 没有使用
const mapDispatchToProps = (dispatch:any) => {
    return {
        setCurrentNode: (id: string,type:string) => {
            dispatch(setCurrentNode(id,type))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App as any);
