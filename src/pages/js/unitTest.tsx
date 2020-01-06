import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class unitTest extends React.Component {
    state = {
        code1: `
        let add = (a, b) => a + b;
        let result = add(1,2);
        let expect = 3;
        if (result !== expect) {
            throw new Error(\`1+2 应该等于 \${expect},但是却等于\${result}\`);
        }
        // 如果不小心 + 写成了 *
        `,
        code2: `
        let add = (a, b) => a * b;
        let expect = (res) => {
            return {
                toBe: (actual) => {
                    if (res !== actual) {
                        throw new Error('预期值与实际值不符')
                    }
                }
            }
        }
        expect(add(1,2)).toBe(3)
        `,
        code3: `
        let add = (a, b) => a * b;
        let expect = (res) => {
            return {
                toBe: (actual) => {
                    if (res !== actual) {
                        throw new Error('预期值与实际值不符')
                    }
                }
            }
        }

        let test = (desc, fn) => {
                try {
                    fn();
                } catch (e) {
                    console.log(\`\${desc} 方法没有通过\`)
                }
        }
        
        test('加法测试', () => {
            expect(add(1,2)).toBe(3)
        })
        `,
        code4: `
        let add = (a, b) => a + b;
        module.exports = { add };
        `,
        code5: `
        const {add} = require('./math');
        test('加法测试', () => {
            expect(add(1,2)).toBe(3)
        })
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
                       <h3>单元测试意义</h3>
                        <ol>
                            <li>检测潜在bug</li>
                            <li>快速反馈功能输出，验证是否达到预期</li>
                            <li>保证代码重构安全性</li>
                            <li>方便协作开发</li>
                        </ol>
                   </li>
                   <li>
                       <h3>单元测试代码</h3>
                        <ul>
                            <li>
                                <h4>简单代码</h4>
                                <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.code1)
                                 }}>
                           </code>
                        </pre>
                            </li>
                            <li>
                                <h4>封装代码</h4>
                                <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.code2)
                                 }}>
                           </code>
                        </pre>
                            </li>
                            <li>
                                <h4>扩展代码</h4>
                                <pre className="line-numbers">
                           <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.code3)
                                 }}>
                           </code>
                        </pre>
                            </li>
                        </ul>
                   </li>
                   <li style={{fontWeight: 'bold'}}>
                       <h3>jest基础使用</h3>
                       <ol>
                           <li>安装：npm install jest -dev </li>
                           <li>
                               创建被测试对象：math.js
                               <pre className="line-numbers">
                                <code className="language-javascript line-numbers"
                                 dangerouslySetInnerHTML={{
                                     __html: marked(this.state.code4)
                                 }}>
                                </code>
                                </pre>
                           </li>
                           <li>
                               创建test文件：math.test.js
                               <pre className="line-numbers">
                                <code className="language-javascript line-numbers"
                                      dangerouslySetInnerHTML={{
                                          __html: marked(this.state.code5)
                                      }}>
                                </code>
                               </pre>
                           </li>
                           <li>修改package.json的 "test": "jest"  </li>
                           <li>
                               <div>执行：npm run test </div>
                               <div style={{border: '1px solid #ddd'}}>单元测试失败，显示：<img style={{width:'500px'}} src={require('./image/failTest.png')} alt=""/></div>
                               <br/>
                               <div style={{border: '1px solid #ddd'}}>单元测试通过，显示：<img style={{width:'500px'}} src={require('./image/passTest.png')} alt=""/></div>
                           </li>
                       </ol>
                   </li>
               </ul>
           </div>
        );
    }
};
export default unitTest