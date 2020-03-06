import React from 'react'
import axios from 'axios';
import { Tree, Icon} from 'antd';
import { connect } from 'react-redux'
import { setMenuRefresh } from '../redux/actions.js'

const { TreeNode } = Tree;

interface siderProps {
    getCurContent: Function,
    children: any,
    setMenuRefresh: Function,
    shouldRefreshMenu: number
}
interface siderState {
    treeNodeData: any
}

class Sider extends React.Component<siderProps,siderState> {
    state = {
        treeNodeData: []
    }
    shouldComponentUpdate(nextProps: any) {
        if(nextProps.shouldRefreshMenu === 1 ) {
            nextProps.setMenuRefresh(0);
            this.getMenu();
        }
        return true
    }
     getMenu = async () => {
        let that = this
        let response = await axios.get('/api/menu')
        let data = response.data;
        if (data.code === 0) {
            that.setState({
                treeNodeData: data.data
            })
        }
    }
    componentWillMount() {
        this.getMenu();
    }
    onSelect = (selectedKeys:any, info:any) => {
        const {id, type} = info.node.props;
        this.props.getCurContent(id, type);
    }

    // 需要从接口中查询到 文件及文件夹列表
    render() {
        let that = this;
        return (
            <Tree
                showLine
                switcherIcon={<Icon type="down" />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={this.onSelect}
            >
                {
                    (function() {
                        let renderTreeNode = function(obj:any) {
                            return  <TreeNode title={obj.title} key={obj.id} id={obj.id} type={obj.type}>
                                {obj.children?obj.children.map((item:any) => {
                                    return renderTreeNode(item)
                                }):''}
                            </TreeNode>
                        }
                        return renderTreeNode(that.state.treeNodeData)
                    }())
                }
            </Tree>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        shouldRefreshMenu: state.shouldRefreshMenu
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setMenuRefresh: (isRefresh:number) =>  {
            dispatch(setMenuRefresh(isRefresh));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sider)