import React from 'react'
// import { Tag } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
class Hard extends React.Component {
    state = {
        code: `ts-interface 接口`,
        interfaceCode1: `
        interface Istate {
        name:string,
        age:number
        }

        var obj1:Istate;
        obj1 = {name:"张三", age:10}
        `,
        interfaceCode2: `
        interface Istate2 {
        name: string,
        age?: number  //存疑 可有可无
        }
        
        var obj2:Istate2;
        obj2 = {name:"张三",age:20}
        obj2 = {name:"李四"}
        `,
        interfaceCode3: `
        //属性个数不确定的时候  any必须是任意类型
        interface Istate3 {
            name:string|number,
            age?:number,
            [propName:string]:any
        }
        var obj3:Istate3 = {name:1,age:10,sex:"男",isMarry:true}
        `,
        interfaceCode4: `
        interface Istate4 {
        name:string,
        readonly age:number
        }
        var obj4:Istate4 = {name:"张三",age:10}
        obj4.name = "李四"
        `
    }
    componentWillMount() {
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
                       <h3>强约束</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode1)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>可选属性</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(this.state.interfaceCode2)
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>属性个数不确定</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(this.state.interfaceCode3)
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>只读属性</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(this.state.interfaceCode4)
                           }}>
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Hard