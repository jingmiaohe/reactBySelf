import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class highOrderFun extends React.Component {
    state = {
        code1: `
        let arr = [1,2,3,4]
        let arr1 = arr.map(function(item) {
            return item + 1
        })
        console.log(arr1) // [2,3,4,5]
        `,
        code2: `
        let arr3 = arr.reduce((x,y) => x+y, 100)
        console.log(arr3) // 110
        
        // ****** reduce 补充 *******
        // reduce(function（accumulator,currentValue,currentIndex,array）{}, initialValue)
        // callback 函数接受4个参数
        // accumulator 累计器
        // currentValue 当前值
        // currentIndex 当前索引
        // array 数组
        // 如提供初始值，即reduce第二个参数（initialValue）存在，accumulator取值数组中第一项,currentValue取值initialValue
        // 如不提供初始值，即reduce第二个参数（initialValue）不存在，accumulator取值数组中第一项,currentValue取值数组中第二项
        // 通常情况下提供初始值更安全
        
        var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
        var maxCallback2 = ( max, cur ) => Math.max( max, cur );
        
        // reduce() 没有初始值
        [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
        [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
        [                      ].reduce( maxCallback ); // TypeError
        
        // map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
        // -Infinity 是无穷小的数
        [ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity );
        `,
        code3: `
        let arr2 = arr.filter(item => item > 2)
        console.log(arr2) // [3,4]
        `,
        code4: `
        // flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
        // var newArray = arr.flat([depth])
        //使用 Infinity，可展开任意深度的嵌套数组
        var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
        arr4.flat(Infinity);
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        `,
        code5: `
        // ****** sort 补充 *******
        // arr.sort([compareFunction])
        // 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序
        var numbers = [4, 2, 5, 1, 3];
        numbers.sort((a, b) => a - b);
        console.log(numbers); // [1,2,3,4,5]
        
        function compare(a, b) {
          if (a < b ) {           // 按某种排序标准进行比较(非数字比较时), a 小于 b
            return -1;
          }
          if (a > b ) {
            return 1;
          }
          // a must be equal to b
          return 0;
        }
        `,
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
                       <h3>高阶函数</h3>
                       <h4 className="littleTitle">什么是高阶函数</h4>
                        <div>
                            第一种： 函数作为参数 的函数<br/>
                            第二种： 函数return 一个 函数
                        </div>
                       <h4 className="littleTitle">内置 的 高阶函数 </h4>
                       <ul>
                           <li>
                               <div className="littleTitle">map</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code1)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">reduce</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code2)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">filter</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code3)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">flat</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code4)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">sort</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code5)
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
export default highOrderFun