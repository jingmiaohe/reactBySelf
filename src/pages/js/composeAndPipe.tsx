import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class composePipe extends React.Component {
    state = {
        code1: `
        let calculate = x => (x + 10) * 10;
        console.log(calculate(10));
        `,
        code2: `
        let add10 = (x) => x + 10;
        let mul10 = (x) => x * 10;
        console.log(mul10(add10(10)))
        `,
        code3: `
        let compose = function(fn1, fn2) {
            return function(x) {
                return fn1(fn2(x));
            }
        }
        let calculate2 = compose(mul10,add10) // 但是这种从右向左执行
        console.log(calculate2(10));
        `,
        code4: `
        let compose3 = function() {
            let args = [].slice.call(arguments);
            return function(x) {
               return args.reduceRight(function(res, cb) {
                    return cb(res)
                }, x)
            }
        }
        let calculate3 = compose3(mul10,add10); // 因为reduceRight，依然从右往左执行
        console.log(calculate3(10));
        `,
        code5: `
        let compose4 = (...args) => x => args.reduceRight((res, cb) => cb(res), x)
        let calculate4 = compose4(mul10,add10); // 因为reduceRight，依然从右往左执行
        console.log(calculate4(10));
        `,
        code6: `
        let compose5 = (...args) => x => args.reduce((res, cb) => cb(res), x)
        `,
        code7: `
        // 拓展解构赋值
        {x=0,y=0} = {}  // 结果：x = 0, y = 0 ---- xy默认值生效
        {x,y} = {}  // 结果：x = undefined, y = undefined 
        {x=0} = {3,8}  // 结果：x = 3
        {x=0，y} = {3}  // 结果：x = 3, y = undefined
        
        // 扩展运算符 结合 解构赋值
        {...y} = {1,2,3}  // y = {1,2,3}
        
        // 扩展运算符 结合 解构赋值
        [...y] = [1,2,3] // y = [1,2,3]
        
        // 纯纯的 扩展运算符
        function(a,b) {}
        function(...arg) {} // arg = [a,b]
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
                       <h3>compose</h3>
                        <div>
                            将需要嵌套执行的函数平铺，<br/>
                            返回函数集 functions 组合后的复合函数<br/>
                            一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行.<br/>
                        </div>
                       <ul>
                           <li>
                               <div className="littleTitle">典型的命令式编程</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code1)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle">函数式编程</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code2)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle">闭包实现复合函数</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code3)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle">使用array.reduce</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code4)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle">es6的写法</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code5)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle">pipe</div>
                               <div>自行顺序和 compose 相反</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code6)
                                  }}>
                            </code>
                        </pre>
                           </li>
                           <li>
                               <div className="littleTitle"> <strong>扩展：</strong>扩展运算符</div>
                               <pre className="line-numbers">
                            <code className="language-javascript line-numbers"
                                  dangerouslySetInnerHTML={{
                                      __html: marked(this.state.code7)
                                  }}>
                            </code>
                        </pre>
                           </li>
                       </ul>
                   </li>
               </ul>
           </div>
        );
    }
};
export default composePipe