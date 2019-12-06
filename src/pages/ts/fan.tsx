import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { Tag } from 'antd';
class Fan extends React.Component {
    state = {
        code: `ts-class 类`,
        interfaceCode1: `
        //没有确切定义返回值类型，运行的数组每一项都可以是任意类型。
        // function createArray(length:number,value:any):Array<any>{
        //     let arr = []
        //     for(var i=0;i<length;i++){
        //         arr[i] = value
        //     }
        //     return arr;
        // }
        // createArray(3,1)
        
        //使用泛型将其改造
        //不传的时候根据类型进行倒推
        //泛型可以用来帮助我们限定约束规范
        function createArray<T>(length:number,value:T):Array<T>{
            let arr = []
            for(var i=0;i<length;i++){
                arr[i] = value
            }
            return arr;
        }
        
        var strArry: string[] = createArray<string>(3,'1')
        var numArray:number []  = createArray(3,1)
        `,
        interfaceCode2: `
        // 接口当中采用泛型
        // interface ICreate{
        //     <T>(name:string,value:T):Array<T>
        // }
        //
        // let func:ICreate;
        // func = function<T>(name:string,value:T):Array<T>{
        //     return []
        // }
        //
        // var strArr:number [] = func("zhangsan",3)
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
                           <Tag color="magenta" style={{marginLeft: 20}}>无确切定义返回值类型</Tag>
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
                           <Tag color="magenta" style={{marginLeft: 20}}>接口当中采用泛型</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode2)
                                 }}>
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Fan