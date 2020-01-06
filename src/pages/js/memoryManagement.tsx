import React from 'react'
class memoryManagement extends React.Component {
    state = {}
    render() {
        return (
           <div className = "cssCenter">
               <ul>
                   <li>
                       <h3>为什么要关注内存</h3>
                        <ol>
                            <li>页面占用内存过大，客户端卡顿或者崩溃</li>
                            <li>nodejs 使用v8引擎，因为后端的持久性链接，后端更容易<strong>内存溢出</strong></li>
                        </ol>
                   </li>
                   <li>
                       <h3>js 原始数据类型</h3>
                       <div className="littleTitle"> 原始数据类型 有固定大小，都是按值访问，保存在 <strong>栈中</strong></div>
                       <ul>
                           <li>字符串 String</li>
                           <li>数字 Number</li>
                           <li>布尔 Boolean</li>
                           <li>未定义 Undefined</li>
                           <li>空对象 Null</li>
                           <li>Symbol</li>
                       </ul>
                       <h3>js 引用类型</h3>
                       <div  className="littleTitle"> 没有固定大小，保存在 <strong>堆中</strong>，不能直接访问，栈中保存该对象引用</div>
                       <ul>
                           <li>Object</li>
                       </ul>
                       <h3>内存空间</h3>
                       <ol>
                           <li className="littleTitle">栈内存（stack）： 先进后出，运算受限的线性表</li>
                           <li className="littleTitle">堆内存（heap）</li>
                       </ol>
                   </li>
                   <li>
                       <h3>垃圾回收</h3>
                       <ol>
                           <li className="littleTitle">不再使用的变量 占用的内存 进行回收</li>
                           <li className="littleTitle">垃圾回收固定时间周期自动进行，不可见，无法干预</li>
                       </ol>
                       <h3>垃圾回收策略：<span>引用计数</span></h3>
                       <div style={{color: '#aaa'}}>跟踪记录每个值，引用加1，释放减1，当引用次数为0，则内存释放，空间回收</div>
                       <div style={{color: '#aaa'}}>bug 循环引用 并不会被释放</div>
                       <div style={{color: '#189088'}}>引用计数 出现在ie8本身及以前</div>
                       <h3>垃圾回收策略：<span>标记清除</span></h3>
                       <div style={{color: '#aaa'}}>
                           <pre>
                           每个执行环境都有一个与之关联的变量对象，环境定义的所有变量和函数都保存在这个对象中：
                               <br/>
                           执行环境：<br/>
                            全局执行环境：<br/>
                               浏览器环境中是window对象，全局变量和函数都是作为window对象的属性和方法创建的，只有当关闭页签或者浏览器的时候才会销毁，
                               node中是global对象。<br/>
                            局部执行环境：<br/>
                               每个函数都有自己的执行环境，当执行流进入一个函数时，函数的执行环境就会被推入一个环境栈中。当函数执行完，栈将其环境弹出，把控制权返回给之前的执行环境。
                               <br/>
                               某个执行环境中代码执行完毕后，该环境被销毁，保存在其中所有的变量和方法随之被销毁
                           </pre>
                       </div>
                       <p style={{color: '#189088'}}>现代浏览器使用标记清除，但回收时间间隔不同</p>
                   </li>
                   <li>
                       <h2>v8（jvascript 引擎）内存管理机制</h2>
                       <div className="littleTitle">应用在 <strong>谷歌浏览器，android，nodejs</strong> 中</div>
                       <div  style={{color: '#aaa'}}>
                           v8限制内存 <br/>
                           本身为浏览器设计，不太可能遇到大量内存的使用场景 <br/>
                           防止因为垃圾回收导致的线程暂停执行的时间过长 <br/>
                           在64位系统下大约为1.4GB，在32位系统下大约为700MB,如果说想要扩大Node可用的内存空间，可以使用Buffer等堆外内存内存<br/>
                           在NodeJS环境中，我们可以通过 <strong>process.memoryUsage()</strong> 来查看内存分配:<br/>
                           <ul>
                               <li>
                                   rss（resident set size）：所有内存占用，包括指令区和堆栈,单位字节（Byte）
                               </li>
                               <li>
                                   heapTotal：V8引擎可以分配的最大堆内存，包含下面的 heapUsed,单位字节（Byte）
                               </li>
                               <li>
                                   heapUsed：V8引擎已经分配使用的堆内存,单位字节（Byte）
                               </li>
                               <li>
                                   external： V8管理C++对象绑定到JavaScript对象上的内存,单位字节（Byte）
                               </li>
                           </ul>
                       </div>
                   </li>
                   <li>
                       <h2>v8垃圾回收策略</h2>
                       <div>
                           8采用了一种代回收的策略，将内存分为两个生代：新生代（new generation）和老生代（old generation），
                           新生代中的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象。新生代平均分成两块相等的内存空间，叫做semispace。
                       </div>
                       <div>
                           默认情况下，32位系统新生代内存大小为16MB，老生代内存大小为700MB，64位系统下，新生代内存大小为32MB，老生代内存大小为1.4GB。
                       </div>
                       <h3>新生代</h3>
                       <ul>
                           <li>
                               <div>step1. 在From空间中分配了3个对象A、B、C</div>
                               <div>
                                   <img style={{width:'500px'}}  src = {require("./image/step1.png")} alt=""/>
                               </div>
                           </li>
                           <li>
                               <div>step2. GC进来判断A对象活跃,将A复制到To(此时to 是连续的)</div>
                               <div>
                                   <img style={{width:'500px'}}  src = {require("./image/step2.png")} alt=""/>
                               </div>
                           </li>
                           <li>
                               <div>step3. GC进来判断对象B没有其他引用，准备将其回收</div>
                               <div>
                                   <img style={{width:'500px'}}  src = {require("./image/step3.png")} alt=""/>
                               </div>
                           </li>
                           <li>
                               <div>step4. GC进来判断C对象活跃,将A复制到To</div>
                               <div>
                                   <img style={{width:'500px'}}  src = {require("./image/step4.png")} alt=""/>
                               </div>
                           </li>
                           <li>
                               <div>step5. 将from 空间清空</div>
                               <div>
                                   <img style={{width:'500px'}} src = {require("./image/step5.png")} alt=""/>
                               </div>
                           </li>
                           <li>
                               <div>step6. 将from 和 to 空间角色互换</div>
                               <div>
                                   <img style={{width:'500px'}}  src = {require("./image/step6.png")} alt=""/>
                               </div>
                           </li>
                       </ul>
                       <h3>新生代 晋升到 老生代</h3>
                       <ol>
                           <li>
                               当一个对象经过多次复制仍然存活时，它就会被认为是生命周期较长的对象。这种较长生命周期的对象随后会被移动到老生代中，
                               <strong>如果一个对象是第二次经历从From空间复制到To空间，那么这个对象会被移动到老生代中</strong>
                           </li>
                           <li>
                               当要从From空间复制一个对象到To空间时，如果To空间已经使用了超过25%，则这个对象直接晋升到老生代中。
                               设置25%这个阈值的原因是当这次Scavenge回收完成后，这个To空间会变为From空间，接下来的内存分配将在这个空间中进行。
                               如果占比过高，会影响后续的内存分配。
                           </li>
                       </ol>
                       <h3>老生代</h3>
                       <div>
                           V8在老生代中主要采用了Mark-Sweep（标记清除）和Mark-compact（标记整理）相结合的方式进行垃圾回收
                       </div>
                       <ol>
                           <li>
                               <div className="littleTitle">Mark-Sweep：标记活着的对象</div>
                               <img style={{width:'500px'}}  src = {require("./image/oldStep1.png")} alt=""/>
                           </li>
                           <li>
                               <div className="littleTitle">Mark-Compact：将活着的对象向内存空间的一端移动，移动完成后，直接清理掉边界外的所有内存</div>
                               <img style={{width:'500px'}}  src = {require("./image/oldStep2.png")} alt=""/> <br/>
                               <img style={{width:'500px'}}  src = {require("./image/oldStep3.png")} alt=""/>
                           </li>
                       </ol>
                   </li>
               </ul>
           </div>
        );
    }
};
export default memoryManagement