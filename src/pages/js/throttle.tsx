import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
class throttle extends React.Component {
    state = {
        code: '# Marked in browser\n\nRendered by **marked**.',
        code1: `
         let deBounce = function(fn,delay) {
            let timer;
            // let timer = setTimeout(fn, 300);
            return function(...args) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                timer = setTimeout(function() {
                    fn(...args);
                }, delay)
            }
        }
       div.onmousemove = deBounce(function() {}, 300)
        `,
        code2: `
        let throttle = function(fn, delay) {
            let timer;
            return function(...args) {
                if (timer) {
                    return false;
                } else {
                    timer = setTimeout(function() {
                        fn(...args);
                        clearTimeout(timer);
                        timer = null;
                    }, delay)
                }
            }
        
        }
        // div.onmousemove = throttle(function() {}, 300)
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
                       <h3>防抖和截流</h3>
                       <ul>
                           <li>
                               <div className="littleTitle">防抖(deBounce)</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code1)
                                          }}>
                                    </code>
                                </pre>
                           </li>
                           <li>
                               <div className="littleTitle">截流(throttle)</div>
                               <pre className="line-numbers">
                                    <code className="language-javascript line-numbers"
                                          dangerouslySetInnerHTML={{
                                              __html: marked(this.state.code2)
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
export default throttle