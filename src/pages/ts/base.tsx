import React from 'react'
import { Tag } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
class Base extends React.Component {
    state = {
        code: `ts基础类型`
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
        console.log('base render')
        return (
           <div className = "cssCenter">
               <ul>
                   <li>
                       <h3>string</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                               dangerouslySetInnerHTML={{
                               __html: marked('var str:string = "hello"')
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>number</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked('var num:number = 1')
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>boolean</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(' var flag:boolean = true')
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>undefined</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(' var un:undefined = undefined')
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>null</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(' var nul:null = null')
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>void</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                               __html: marked(`
                           //void用来规定函数无返回值
                            var callBack = function():void{

                           }`)
                           }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>any</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(`
                           var num:any = 1;
                           num = true;
                           num = "3";

                            var num2;//没有赋值操作 就会被认为任意值类型  等价于 var num2:any;
                            num2 = 1;
                            num2 = true;
                            `)}}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>联合类型！！！！！！</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(`
                             // 联合类型
                             var muchtype:string|number = "hello"
                             muchtype = 10
                              `)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>允许互转！！！！！！</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(`
                             // string number boolean 类型可以赋值为 undefined 或者 null
                             str = undefined;
                             num = null;
                             flag = null;
                                     `)
                                 }}>
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Base