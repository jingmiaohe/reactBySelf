// 发布者
class Vue{
    constructor(options:any) {
        this.$data:any = options.data
        this.$el:any = document.querySelector(options.el);
        // 容器，存放订阅者信息（哪个数据 被谁订阅了）
        this._directive:any = {} //{myText : [订阅者1, 订阅者2], myBox: [订阅者1, 订阅者2]}
        // 数据初始化准备工作： 1 劫持数据 2 模版编译（解析指令）
        this.Observe(this.$data);
        this.Compile(this.$el);
    }
    // 劫持数据
    Observe(data:any):void {
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
    Compile(el):void {
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