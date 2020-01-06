import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class codeReliable extends React.Component {
    state = {
        code1: `
        
        let arr = [1,2,3,4];
        let newArr = (arr) => {
         let res = [];
         for(let i = 0; i<arr.length; i++) {
            res.push(arr[i] + 1)
         }
         return res;
        }
        // 但是如果想要每项 + 5 呢，，或者每项 * 5呢，难道要去再复制修改一遍呢
        // 且看 函数式 编程 
        
        `,
        code2: `

        let arr = [1,2,3,4];
        let newArr = (arr, fn) => {
         let res = [];
         for(let i = 0; i<arr.length; i++) {
            res.push(fn(arr[i]))
         }
         return res;
        }
        let add = item => item + 5;
        let product = item => item * 5;
        let sum = newArr(arr, add);
        <!--let sum = newArr(arr, product);-->
        
        `,
        code3: `
        
            // 非纯函数  打折计算价格
            let discount = 0.8;
            const calc = (price) => price * discount;
            let price = calc(200);
            
            // 纯函数  打折计算价格
            const calc = (price, discount) => price * discount;
            let price = calc(200, 0.8);
            
        `,
        code4: `
        
            let data = {count: 1};
            let foo = (data) => {
            data.count = 3;
            };
            console.log(data.count); // 1
            foo(data);
            console.log(data.count); // 3 
        `,
        code5: `
        
            let data = {count: 1};
            let foo = (data) => {
            let lily = {... data} // 注意扩展运算符是浅拷贝
            lily.count = 3;
            };
            console.log(data.count); // 1
            foo(data);
            console.log(data.count); // 1
        `,
        code6: `
            let a = 5;
            let foo = () => a = a * 10;
            foo();
            console.log(a); // 50
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
                       <h3>命令式编程</h3>
                        <div>详细的命令机器怎么去处理一件事情以达到想要的结果</div>
                       <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code1)
                                  }}>
                            </code>
                        </pre>
                   </li>
                   <li>
                       <h3>函数式编程</h3>
                       <div>白话理解：更接近数学计算，把大段代码拆成函数，通过一层一层的函数调用，把复杂任务分解成简单的任务</div>
                       <pre className="line-numbers">
                                   <code className="language-javascript line-numbers"
                                         dangerouslySetInnerHTML={{
                                             __html: marked(this.state.code2)
                                         }}>
                                   </code>
                        </pre>
                        <ul>
                            <li>
                                <h4>纯函数</h4>
                                <div>函数的返回结果只依赖参数,相同的输入永远得到相同的输出，无副作用</div>
                                <pre className="line-numbers">
                                   <code className="language-javascript line-numbers"
                                         dangerouslySetInnerHTML={{
                                             __html: marked(this.state.code3)
                                         }}>
                                   </code>
                                </pre>
                            </li>
                            <li>
                                <h4>副作用</h4>
                                <div>目标： 尽可能减少 函数副作用，控制不确定性</div>
                                <ol>
                                    <li>
                                        尤其改变全局变量,函数内部修改了全局变量
                                        <pre className="line-numbers">
                                   <code className="language-javascript line-numbers"
                                         dangerouslySetInnerHTML={{
                                             __html: marked(this.state.code6)
                                         }}>
                                   </code>
                                </pre>
                                    </li>
                                    <li>一些方法（pop/splice，会改变原数组）</li>
                                </ol>
                            </li>
                            <li>
                                <h4>可变性 和 不可变性</h4>
                                <ol>
                                    <li>
                                        可变性值得是一个变量创建以后可以任意修改
                                        <pre className="line-numbers">
                                           <code className="language-javascript line-numbers"
                                                 dangerouslySetInnerHTML={{
                                                     __html: marked(this.state.code4)
                                                 }}>
                                           </code>
                                        </pre>
                                    </li>
                                    <li>
                                        不可变性指一个变量，一旦被创建，就永远不会发生改变，不可变性是函数式编程的核心概念
                                    <pre className="line-numbers">
                                           <code className="language-javascript line-numbers"
                                                 dangerouslySetInnerHTML={{
                                                     __html: marked(this.state.code5)
                                                 }}>
                                           </code>
                                    </pre>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                   </li>
               </ul>
           </div>
        );
    }
};
export default codeReliable;