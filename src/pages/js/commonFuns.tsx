import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class commonFuns extends React.Component {
    state = {
        code1: `
         // 尝试实现
        let memorise = function(fn) {
            let cache = new Map();
            return function(...args) {
                args = args.sort(); // 参数数组排序
                if(cache.has(args)) {
                    return cache.get(args)
                } else {
                    let result = fn(...args);
                    cache.set(args, result)
                    return cache[args] = result;
                }
            }
        }
        
        // 保存结果 参数为key 结果为 result
        let add = (x,y) => x+y;
        let calculate = memorise(add);
        calculate(10,20) // 当再次调用，就不会 从新计算
        `,
        code2: `
        var curry = function(fn) {
            var limit = fn.length // 指的是参数的个数
            return function judgeCurry (...args) {
                if (args.length >= limit) {
                    return fn.apply(null, args)
                } else {
                    return function(...args2) {
                        return judgeCurry.apply(null, args.concat(args2))
                    }
                }
            }
        }
        let add2 = (x,y,z) => x+y+z;
        let a = curry(add2);
        console.log(a(1))
        console.log(a(1,2,3)) // 6
        console.log(a(1,2)(3)) // 6
        console.log(a(1)(2)(3)) // 6
        `,
        code3: `
        // 通过改写 fn.toString 的 形式
        function add(){
            var args = [].slice.call(arguments);
            var fn = function(){
                var newArgs = args.concat([].slice.call(arguments));
                return add.apply(this,newArgs);
            }
            fn.toString = function(){
                return args.reduce(function(a, b) {
                    return a + b;
                })
            }
            return fn ;
        }
        
        console.log(add(1)(2)(3)+0) //6
        console.log(add(1,2,3)+0)   //6
        console.log(add(1)(2,3)(3)+0) //9
        `,
        code4: `
        // 通过ajaxTest1()把原函数ajax()的参数个数从3个减少到了2个
        function ajax(url, data, callback) {
            // ..
        }
        // function newAjax(url) {
        //     return function(data, callback) {
        //         ajax(url, data, callback)
        //     }
        // }
        // 或者 使用bind
        function newAjax(url) {
            return ajax.bind(null,url)
        }
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
                       <h3>常用函数集锦</h3>
                       <ul>
                           <li>
                               <div className="littleTitle">缓存函数</div>
                               <h4>
                                   所谓函数缓存，就是将函数运算过的结果缓存起来，这种做法是典型的用内存去换取性能的手段，常用于缓存数据计算结果和缓存对象。
                               </h4>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code1)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">函数柯里化</div>
                               <h4>固定参数数量的柯里化</h4>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code2)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">函数柯里化</div>
                               <h4>不固定参数数量的柯里化，自己决定什么时候终止</h4>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code3)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">偏函数</div>
                               <h4>使用 bind 添加新的参数 并 将 新函数 返回</h4>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code4)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <h3><span>😯😯😯总结😯😯😯</span></h3>
                               <h4>
                                   // 柯里化 或  偏函数 主要是对于参数进行一些操作，将多个参数转换为单一参数或者减少参数个数的过程。
                                 </h4>
                               <h4>
                                   // 如果参数不足的话它们就会处在一种中间状态，我们可以利用这种中间状态做任何事！！！
                                </h4>
                               <h4>
                                   // 而传统函数调用则需要预先确定所有实参。
                               </h4>
                               <h4>
                                  // 如果你在代码某一处只获取了部分实参，然后在另一处确定另一部分实参，这个时候柯里化和偏应用就能派上用场。
                               </h4>

                           </li>
                       </ul>
                   </li>
               </ul>
           </div>
        );
    }
};
export default commonFuns