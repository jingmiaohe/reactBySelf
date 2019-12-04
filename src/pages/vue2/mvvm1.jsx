import React from 'react'
import { highlight, languages} from 'prismjs';
import ReactHtmlParser from 'react-html-parser';

class Mvvm extends React.Component {
    state = {
        code: `
        var arraypro = Array.prototype;
       
        // Object.create 等同于 arrayob.__proto__ = arraypro;
        var arrayob = Object.create(arraypro);
        
        var arr: = ["push", "pop", "shift"];
        
        // 需要 arr 里面的方法 既能保持原有的方法，又能触发 更新
        // (装饰者模式)
        arr.forEach(function(method:string, index:number) {
            // 对 arrayob 里面 "push", "pop", "shift" 方法进行重写
            arrayob[method] = function(){
                var ret = arraypro[method].apply(this,arguments);
                console.log('监测到数组的变动，触发更新')
                return ret;
            }
        })
        
        var arr1 = [];
        arr1.__proto__ = arrayob;
        `
    }
    componentDidMount() {
        // 需要实现数据双向绑定
        // 《视图 === 数据》  （即绑定data对象的每项属性）
    ﻿   // 1.首先根据上图实现整体的一个架构（包括MVVM类或者VUE类、Watcher类），
        // 这里用到一个订阅发布者设计模式。
        // 2. 然后实现MVVM中的由M到V，把模型里面的数据绑定到视图。
        // 3. 最后实现V-M, 当文本框输入文本的时候，由文本事件触发更新模型中的数据
        // 同时也更新相对应的视图。
        // 发布者
        class Vue{
            constructor(options) {
                this.$data = options.data
                this.$el = document.querySelector(options.el);
                // 容器，存放订阅者信息（哪个数据 被谁订阅了）
                this._directive = {} //{myText : [订阅者1, 订阅者2], myBox: [订阅者1, 订阅者2]}
                // 数据初始化准备工作： 1 劫持数据 2 模版编译（解析指令）
                this.Observe(this.$data);
                this.Compile(this.$el);
            }
            // 劫持数据
            Observe(data) {
              for(let key in data) {
                  this._directive[key] = []; // 每一个data属性 可能被多个订阅者订阅
                  let watcher = this._directive[key]; // 记录索引
                  let val = data[key];
                  Object.defineProperty(this.$data, key, {
                      get: function() {
                          return val
                      },
                      set: function(newVal) {
                          if (newVal!== val) { // 暂不考虑 引用类型
                              val = newVal;
                              watcher.forEach(element => {
                                  element.update(); // 触发视图更新
                              })
                          }
                      }
                  })
              }
            }
            // 功能--> 解析指令   完成依赖收集
            Compile(el) {
                let nodes = el.children;
                for(let i = 0; i < nodes.length; i++) {
                    let node = nodes[i];
                    if (node.children.length) {
                        this.Compile(el);
                    }
                    if (node.hasAttribute('v-text')) {
                        let attrVal = node.getAttribute('v-text'); // 拿到的myText
                        this._directive[attrVal].push(new Watcher(node, this, attrVal, 'innerHtml'))
                    }
                    if (node.hasAttribute('v-model')) {
                        let attrVal = node.getAttribute('v-model'); // 拿到的myText
                        this._directive[attrVal].push(new Watcher(node, this, attrVal, 'value'))
                    }
                }
            }
        }

        // 订阅者
        // 更新本身的状态 更新视图
        class Watcher {
            constructor(el, vm, exp, attr) {
            ﻿   this.el = el; // node
                this.vm = vm; // vue 实例
                this.exp = exp; // 变量属性名
                this.attr = attr; // 属性名
                this.update();
            }
            update() {
            ﻿   this.el[this.attr] = this.vm.$data[this.exp];
            }
        }
        const app = new Vue({
            el: "#app",
            data: {
                myText: '早上好' ,
                myBox: '我是一个盒子'
            }
        })

    }
    render() {
        const js = ReactHtmlParser(this.state.code);
        const html = highlight(js,languages.js,'js')
        return (
           <div className = "cssCenter">
               <h4>数据响应式</h4>
               <div>
                   <img src="./mvvm.png" alt=""/>
               </div>
               <div>
                   <div v-text="myText"></div>
                   <div v-text="myBox"></div>
                   <input type="text" v-model="myText"></input>
                   <input type="text" v-model="myBox"></input>
               </div>
               <pre className="line-numbers">
                   <code className="language-javascript line-numbers">
                       {/*{ReactHtmlParser(this.state.code)}*/}
                       {highlight(js,languages.markup,'markup')}
                   </code>
               </pre>
           </div>
        );
    }
};
export default Mvvm