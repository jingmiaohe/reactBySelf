import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { Tag } from 'antd';
class Enum extends React.Component {
    state = {
        code: `ts-class 类`,
        interfaceCode1: `
        //使用枚举可以定义一些有名字的数字常量
        enum Days{
            Sun=3,
            Mon,
            Tue,
            Wed,
            Thu,
            Fri,
            Sat
        }
        
        console.log(Days.Sun)  //3
        console.log(Days.Sat)  //9
        
        console.log(Days) //枚举类型会被编译成一个双向映射的对象
        console.log(Days[0] === "Sun")
        `
    }
    componentDidMount() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
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
                           <Tag color="magenta" style={{marginLeft: 20}}>枚举</Tag>
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
export default Enum