import React from 'react'
import { Row, Col, Tag } from 'antd';
interface Greeting {
    html1: string;
    html2: string;
    html3: string;
    html4: string;
    css1: string;
    css2: string;
    css3: string;
    css4: string;
}
class CssLayout extends React.Component<Greeting>{
        state : Greeting = {
            html1: `<div className="parent parent1">\n
                         <div className="parent parent1">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                    </div>`,
            css1: `
                 .left{
                    float: left;
                }
                .right{
                    margin-left: 30px;
                }
                `,
            html2: `<div className="parent parent2">\n
                         <div className="parent parent2">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                    </div>`,
            css2: `
                 .left{
                    float: left;
                   // bfc 的 原理
                }
                .right{
                    overflow: hidden;
                }
                `,
            html3:`<div className="parent parent3">\n
                         <div className="parent parent3">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                    </div>`,
            css3: `
            .parent3{
                    display: table;
                    table-layout: fixed;
                }
                 .left{
                    display: table-cell;
                   // bfc 的 原理
                }
                .right{
                    display: table-cell;
                    // 因为float 之后 ，会被其他周围元素环绕
                }
                `,
            html4: `<div className="parent parent4">\n
                         <div className="parent parent4">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                    </div>`,
            css4: `
            .parent4{
                    display: flex
                }
                 .left{
                   width: 30px;
                }
                .right{
                    flex: 1;
                }
                `
        };

    render() {
        return (
           <div className="cssLayout">
               <h4>左定宽 右自适应</h4>
               <div className="box box1">
                   <h4>
                       1<Tag color="magenta" style={{marginLeft: 20}}>float + margin</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html1}</div>
                           <div>{this.state.css1}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent1">
                               <div className = "left left1"></div>
                               <div className = "right right1"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>
                       2<Tag color="magenta" style={{marginLeft: 20}}>float + overflow</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html1}</div>
                           <div>{this.state.css1}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent2">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>
                       3<Tag color="magenta" style={{marginLeft: 20}}>table</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html3}</div>
                           <div>{this.state.css3}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent3">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>
                       4<Tag color="magenta" style={{marginLeft: 20}}>flex</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html4}</div>
                           <div>{this.state.css4}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent4">
                               <div className = "left"></div>
                               <div className = "right"></div>
                           </div>
                       </Col>
                   </Row>

               </div>

           </div>
        );
    }
};
export default CssLayout