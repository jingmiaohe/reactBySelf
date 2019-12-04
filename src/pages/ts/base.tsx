import React from 'react'
import { Tag } from 'antd';
import { highlight, languages} from 'prismjs';
class Mvvm extends React.Component {
    state = {
        code: `ts基础类型`
    }
    render() {
        return (
           <div className = "cssCenter">
               <ul>
                   <li>
                       <h3>string</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                   {highlight('var str:string = "hello"',languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>number</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                               {highlight('var num:number = 1',languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>boolean</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                               {highlight(' var flag:boolean = true',languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>undefined</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                             {highlight(' var un:undefined = undefined',languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>null</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                 {highlight('var nul:null = null',languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>void</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                     {highlight(`
                           //void用来规定函数无返回值
                            var callBack = function():void{

                           }`,languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>any</h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                     {highlight(`
                           var num:any = 1;
                           num = true;
                           num = "3";

                            var num2;//没有赋值操作 就会被认为任意值类型  等价于 var num2:any;
                            num2 = 1;
                            num2 = true;
                            `,languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>联合类型！！！！！！</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                     {highlight(`
                                     // 联合类型
                                     var muchtype:string|number = "hello"
                                     muchtype = 10
                                     `,languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
                   <li>
                       <h3>
                           <Tag color="magenta" style={{marginLeft: 20}}>允许互转！！！！！！</Tag>
                       </h3>
                       <pre className="line-numbers">
                           <code className="language-javascript line-numbers">
                                     {highlight(`
                                     // string number boolean 类型可以赋值为 undefined 或者 null
                                     str = undefined;
                                     num = null;
                                     flag = null;
                                     `,languages.markup,'markup')}
                           </code>
                        </pre>
                   </li>
               </ul>
           </div>
        );
    }
};
export default Mvvm