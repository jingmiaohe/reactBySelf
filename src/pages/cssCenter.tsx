import React from 'react'
import { Row, Col, Tag } from 'antd';
interface Greeting {
    html1: string;
    html2: string;
    html3: string;
    html4: string;
    html5: string;
    html6: string;
    css1: string;
    css2: string;
    css3: string;
    css4: string;
    css5: string;
    css6: string;
}
class CssCenter extends React.Component<Greeting> {
        state : Greeting = {
            html1: `<div className="parent parent1">\n
                        <div className = "child child1"></div>
                    </div>`,
            css1: `
                 .parent{
                    text-align: center;
                }
                .child{
                    display: inline-block;
                }
                `,
            html2: `<div className="parent parent2">
                               <div className = "child child2"></div>
                           </div>`,
            css2: `
                .parent2{
                    position: relative;
                }
                .child2{
                    position: absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%,-50%)
                }
            `,
            html3: `<div className="parent parent3">
                <div className = "child child3"></div>
            </div>`,
            css3: `
                .parent3{
                }
                .child3{
                        margin: 0 auto;
                        display: table;
                    }
            `,
            html4: `<div className="parent parent4">
                <div className = "child child4"></div>
            </div>`,
            css4: `
                .parent4{
                    display: flex;
                    justify-content: center;
                }
                .child4{
                    }
            `,
            html5: `<div className="parent parent5">
                    <div className = "child child5"></div>
                 </div>`,
            css5: `
                .parent5{ 
                    display: table-cell;
                     vertical-align: middle;
                }
                .child5{
                    }
                `,
            html6: `<div className="parent parent6">
                    <div className = "child child6"></div>
                 </div>`,
            css6: `
                .parent6{ 
                    display: table-cell;
                     vertical-align: middle;
                }
                .child6{
                    }
                `
        }

    render() {
        return (
           <div className = "cssCenter">
               <h3>居中布局</h3>
               <div className="box box1">
                   <h4>1.水平居中
                  </h4>
                   <h4>1.1
                       <Tag color="magenta" style={{marginLeft: 20}}>inline-block + text-align</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html1}</div>
                           <div>{this.state.css1}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent1">
                               <div className = "child child1"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>1.2
                       <Tag color="magenta" style={{marginLeft: 20}}>table + margin</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html2}</div>
                           <div>{this.state.css2}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent2">
                               <div className = "child child2"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>1.3
                       <Tag color="magenta" style={{marginLeft: 20}}>absolute + transform</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html3}</div>
                           <div>{this.state.css3}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent3">
                               <div className = "child child3"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>1.4
                       <Tag color="magenta" style={{marginLeft: 20}}>flex + justify-content</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html4}</div>
                           <div>{this.state.css4}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent4">
                               <div className = "child child4"></div>
                           </div>
                       </Col>
                   </Row>
               </div>
               <div className="box box2">
                   <h4>2.垂直居中 </h4>
                   <h4>
                       2.1<Tag color="magenta" style={{marginLeft: 20}}>table-cell + vertical-align</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html5}</div>
                           <div>{this.state.css5}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent5">
                               <div className = "child child5"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>
                       2.2<Tag color="magenta" style={{marginLeft: 20}}>absolute + transform</Tag>
                   </h4>
                   <h4>
                       2.3<Tag color="magenta" style={{marginLeft: 20}}>flex + align-items</Tag>
                   </h4>

               </div>
               <div className="box box3">
                   <h4>3.水平垂直居中</h4>
                   <h4>
                       3.1<Tag color="magenta" style={{marginLeft: 20}}>inline-block + text-align + table-cell + vertical-align</Tag>
                   </h4>
                   <Row>
                       <Col span={12}>
                           <div>{this.state.html6}</div>
                           <div>{this.state.css6}</div>
                       </Col>
                       <Col span={12}>
                           <div className="parent parent6">
                               <div className = "child child6"></div>
                           </div>
                       </Col>
                   </Row>
                   <h4>
                       3.2<Tag color="magenta" style={{marginLeft: 20}}>absolute + transform</Tag>
                     </h4>
                   <h4>
                       3.3<Tag color="magenta" style={{marginLeft: 20}}>flex + justify-content + align-items</Tag>
                   </h4>
               </div>

           </div>
        );
    }
};
export default CssCenter