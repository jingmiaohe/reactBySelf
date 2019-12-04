import React from 'react'

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
    render() {
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
                   </code>
               </pre>
           </div>
        );
    }
};
export default Mvvm