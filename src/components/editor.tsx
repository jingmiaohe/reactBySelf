import React from 'react'
// import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import { deBounce } from '../util/throttle.js'

interface EditorState {
    show: boolean,
    markdown: string|undefined
}
interface EditorProps {
    hideEditor: boolean,
    defaultContent: string,
    setEditorContent: Function
}

// 切换文件夹之前注意保存编辑信息
class Editor extends React.Component<EditorProps, EditorState>{
    constructor(props: any) {
        super(props)
        this.state = {
            show: false,
            markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6',
        }
        this.updateMarkdown = deBounce(300, this.updateMarkdown);
        // this.updateMarkdown = this.updateMarkdown.bind(this)
    }
    updateMarkdown = (value:string|undefined) => {
        this.setState({ markdown: value });
        this.props.setEditorContent(value);
    }
    render() {
        console.log('render')
        const {defaultContent} = this.props;
        return (
            <div>
                <MDEditor
                    height='100%'
                    value={defaultContent}
                    onChange={this.updateMarkdown}
                />
            </div>

        )
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state: any) => {
    return {
        hideEditor: state.hideEditor,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setEditorContent: (content:string) =>  {
            let action = {
                type:'SET_EDITOR_CONTENT',
                data: content
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
