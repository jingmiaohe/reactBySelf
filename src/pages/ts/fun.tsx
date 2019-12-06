import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { Tag } from 'antd';
class Fun extends React.Component {
    state = {
        code: `ts-function 类`,
        interfaceCode1: `
        //声明式类型的函数
        function funcType(name:string,age:number):number{
            return age
        }
        var ageNum:number = funcType("张三",18)
        `,
        interfaceCode2: `
        //函数参数不确定
        function funcType2(name:string,age:number,sex?:string):number{
            return age
        }
        var ageNum2: number = funcType2("张三",18,"男")
        `,
        interfaceCode3: `
        //函数参数的默认值
        function funcType3(name:string="张三",age:number=18):number{
            return age
        }
        `,
        interfaceCode4: `
        //表达式类型的函数
        var funcType4 = function(name:string,age:number):number{
            return age
        }
        
        var funcType5:(name:string,age:number)=>number = function (name: string, age: number): number {
            return age
        }
        `,
        interfaceCode5: `
        //接口类型表示函数
        interface funcType6 {
            (name:string,age:number):number
        }
        var funcType6: funcType6 = function (name: string, age: number): number {
            return age
        }
        `,
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
                console.log('456')
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
                           <Tag color="magenta" style={{marginLeft: 20}}>声明式function</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode1)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>参数不确定</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode2)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>函数参数默认值</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode3)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>表达式类型</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode4)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>接口表示</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode5)
                                 }}>
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Fun