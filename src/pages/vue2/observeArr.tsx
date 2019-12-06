import React from 'react'
import { highlight, languages, highlightAll} from 'prismjs';
import ReactHtmlParser from 'react-html-parser';

interface Greeting {
    code: string;
}
class ObserveArr extends React.Component<Greeting> {
    state: Greeting = {
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
        highlightAll(false, undefined);
        var arraypro:any = Array.prototype;
        // Object.create 等同于 arrayob.__proto__ = arraypro;
        var arrayob:any = Object.create(arraypro);
        // arrayob['push'] = function() : void{}
        var arr: Array<string> = ["push", "pop", "shift"];
        // 需要 arr 里面的方法 既能保持原有的方法，又能触发 更新
        // 装饰者模式
        arr.forEach(function(method:string, index:number) {
            // 对 arrayob 里面 "push", "pop", "shift" 方法进行重写
            arrayob[method] = function() :object{
                var ret = arraypro[method].apply(this,arguments);
                console.log('监测到数组的变动，触发更新')
                return ret;
            }
        })
        var arr1:any = [];
        arr1.__proto__ = arrayob;
    }
    render() {
        const js:any = ReactHtmlParser(this.state.code);
        const html:any = highlight(js,languages.js,'js')
        return (
           <div className = "cssCenter">
               <h4>装饰者模式的应用</h4>
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
export default ObserveArr