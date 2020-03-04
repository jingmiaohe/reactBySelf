import React, {Fragment} from 'react'
import { Button, Modal, Input, Popconfirm, message } from 'antd';
import { connect } from 'react-redux'
import axios from 'axios';
import qs from 'qs';

interface HeaderProps {
    currentNodeId: string,
    currentNodeType: string,
    editorContent: string
}
interface HeaderState {
    visible: boolean,
    modalTitle: string,
    modalVal: string,
}


class Header extends React.Component<HeaderProps, HeaderState> {
    state={
        visible: false,
        modalTitle: '',
        modalVal: '',
    }
    // 添加
    clickAddMenu() {
        this.setState({
            visible: true,
            modalTitle: '添加文件夹',
        })
    }
    clickAddFile() {
        this.setState({
            visible: true,
            modalTitle: '添加文件'
        })
    }
    changeModal =  (e:any)=> {
        this.setState({
            modalVal: e.target.value
        })
    }
    handleOk() {
        let url = this.state.modalTitle === '添加文件'?'/api/addFile':'/api/addMenu';
        let type = this.state.modalTitle === '添加文件'?'1':'0';
        axios.post(url, qs.stringify({
            pid: this.props.currentNodeId,
            title: this.state.modalVal,
            type,
        })).then(res => {
            if (res.data.code === 0){
                console.log('保存成功')
                // 还需要刷新 菜单
            }
        });
        this.setState({
            visible: false,
            modalTitle: '',
            modalVal: ''
        })
    }
    // 删除
    confirmDeleteMenu() {
        axios.post('/api/deleteMenu', qs.stringify({
            id: this.props.currentNodeId
        })).then(res => {
            if (res.data.code === 0){
                console.log('保存成功')
                // 还需要刷新 菜单
            }
        })
    }
    confirmDeleteFile() {
        axios.post('/api/deleteFile', qs.stringify({
            id: this.props.currentNodeId
        })).then(res => {
            if (res.data.code === 0){
                console.log('保存成功')
                // 还需要刷新 菜单
            }
        })
    }
    handleCancel() {
        this.setState({
            visible: false,
            modalTitle: '',
            modalVal: ''
        })
    }

    saveFile() {
        let that = this;
        axios.post('/api/saveContent', qs.stringify({
            id: that.props.currentNodeId,
            content: that.props.editorContent
        })).then(res => {
            if (res.data.code === 0){
                console.log('保存成功')
            }
        })
    }
    showFile() {
    }
    editFile() {
    }
    render() {
        const { currentNodeType } = this.props;
        return (
            <div>
                {currentNodeType === '0'?
                    <Fragment>
                        <Button type="primary" onClick={this.clickAddMenu.bind(this)}>
                            新建文件夹
                        </Button>
                        <Popconfirm
                            title="是否确认删除该文件夹"
                            onConfirm={this.confirmDeleteMenu.bind(this)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary">删除文件夹</Button>
                        </Popconfirm>

                        <Button type="primary"  onClick={this.clickAddFile.bind(this)}>
                            新建文章
                        </Button>
                        <Popconfirm
                            title="是否确认删除该文件"
                            onConfirm={this.confirmDeleteFile.bind(this)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary">删除文章</Button>
                        </Popconfirm>

                    </Fragment>
                    :
                    <Fragment>
                        <Button type="primary" onClick={this.saveFile.bind(this)}>
                            保存
                        </Button>
                        <Button type="primary" onClick={this.showFile.bind(this)}>
                            预览
                        </Button>
                        <Button type="primary" onClick={this.editFile.bind(this)}>
                            编辑
                        </Button>
                    </Fragment>
                        }
                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Input value={this.state.modalVal} onChange={this.changeModal}/>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        currentNodeId: state.currentNodeId,
        currentNodeType: state.currentNodeType,
        editorContent: state.editorContent
    }
}
export default connect(mapStateToProps,{})(Header as any)