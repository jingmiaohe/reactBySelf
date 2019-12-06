import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class Arr extends React.Component {
    state = {
        code: `ts-array 表示方法`,
        interfaceCode1: `
        //类型+方括号
        var arr:number [] = [1,2,3]
        var arr2:string [] = ["1","2","3"]
        var arr3:any [] = [1,"2",true]
        `,
        interfaceCode2: `
        可采用数组泛型 Array < elemType > 表示法
        var arrType: Array < number > = [1, 2, 3]
        var arrType2: Array < string > = ["1", "2", "3"]
        var arrType3: Array < any > = [1, "2", true]
        `,
        interfaceCode3: `
        // 可采用接口表示法
        interface Istate {
            username:string,
            age:number
        }
        var arrType6: Istate[] = [{ username: "张三", age: 10 }]
        `,
        interfaceCode4: `
        // 可采用接口表示法
        interface Istate {
            username:string,
            age:number
        }
        var arrType5: Array< Istate > = [{ username: "张三", age: 10 }]
        `,
        interfaceCode5: `
        // 可采用接口表示法 接口表示数组 接口表示数组内容
        interface Istate {
            username:string,
            age:number
        }

        interface IArr {
            [index: number]: Istate
        }
        var arrType4:IArr = [{username:"张三",age:10}]
        `
    }
    componentWillMount() {
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
            }
        })
    }
    render() {
        return (
           <div className = "cssCenter">
               <ul>
                   <li>
                       <h3>类型+方括号</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode1)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>数组泛型 Array &lt; elemType &gt;</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode2)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>数组泛型</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode3)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>[]+接口</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.interfaceCode4)
                                 }}>
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>接口+接口</h3>
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
export default Arr