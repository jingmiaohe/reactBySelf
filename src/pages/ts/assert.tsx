import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { Tag } from 'antd';
class Assert extends React.Component {
    state = {
        code: `ts-class 类`,
        interfaceCode1: `
        // let num:number|string = "10"
        // num = 20
        // console.log(num.length)
        
        
        //类型断言  只能断言联合类型中存在的类型
        function getAssert(name:string|number){
            // return (<string>name).length
            return (name as string).length
        }
        `
    }
    componentDidMount() {
        console.log('123')
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                console.log('345')
                return hljs.highlightAuto(code).value;
            },
        })
    }
    render() {
        return (
           <div className = "cssCenter">
               <ul>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>断言</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(this.state.interfaceCode1)
                           }}>
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Assert