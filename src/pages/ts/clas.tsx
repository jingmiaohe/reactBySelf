import React from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { Tag } from 'antd';
class Clas extends React.Component {
    state = {
        code: `ts-class 类`,
        interfaceCode1: `
        //创建Person类
        class Person{
        private name="张三"  // private 私有属性只能在类的内部进行访问，子类就不可以进行访问！
        protected age=18  // protected 受保护属性，可以在子类里面进行访问
        say(){
            console.log("我的名字是"+this.name+",我的年龄为:"+this.age)
            }
        }
        `,
        interfaceCode2: `
        class Child extends Person{
            callParent(){
                console.log(super.age)
                super.say()
            }
            static test(){
                console.log("test")
            }
        }

        var c = new Child()
        // c.callParent()
        // console.log(c.age) //子类继承了父类，但是没有办法直接获取到父类私有的属性或者受保护的属性 
        // console.log(c.say()) //子类继承了父类，子类就可以访问到父类的公开的属性或者方法了
        
        console.log(Child.test()) //类的静态方法里面，是不允许用this
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
                           父类
                           <Tag color="magenta" style={{marginLeft: 20}}>private + protected</Tag>
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
                           子类
                           <Tag color="magenta" style={{marginLeft: 20}}>static</Tag>
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
export default Clas