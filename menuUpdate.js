//
var db = connect('note')
// db.menu.update({
//     title: 'css'
// }, {$set: {
//     type: '0', // 文件夹
//     id: '1',
//     children: [
//         {title: 'resetCss',type: '1',pid:'1',id:'1'}, // 文件
//         {title: '居中',type: '1',pid:'1',id:'2'},
//         {title: '布局',type: '1',pid:'1',id:'3'}
//     ]
// }})
// db.menu.update({
//     title: 'js高阶'
// }, {$set: {
//     type: '0',
//     id: '2',
//     children: [
//         {title: '内存管理',type: '1',pid:'2',id:'1'},
//         {title: '代码质量',type: '1',pid:'2',id:'2'},
//         {title: '代码可靠性',type: '1',pid:'2',id:'3'},
//         {title: 'compose pipe',type: '2',pid:'3',id:'4'},
//         {title: '高阶函数',type: '1',pid:'2',id:'5'},
//         {title: '常用函数',type: '1',pid:'2',id:'6'},
//         {title: '防抖和截流',type: '1',pid:'2',id:'7'}
//     ]
// }})
// db.menu.update({
//     title: 'typescript'
// }, {$set: {
//     type: '0',
//     id: '3',
//     children: [
//         {title: '基础类型',type: '1',pid:3,id:'1'},
//         {title: '接口',type: '1',pid:3,id:'2'},
//         {title: '数组',type: '1',pid:'3',id:'3'},
//         {title: '函数类型',type: '1',pid:'3',id:'4'},
//         {title: '枚举',type: '1',pid:'3',id:'5'},
//         {title: '类修饰符',type: '1',pid:'3',id:'6'},
//         {title: '类型断言',type: '1',pid:'3',id:'7'},
//         {title: '泛型',type: '1',pid:'3',id:'8'}
//     ]
// }})
db.menu1.insert({'id': '0',pid: '', title: 'css', type: '0'})
db.menu1.insert({'id': '1',pid: '0', title: 'resetCss', type: '1'})
db.menu1.insert({'id': '2',pid: '0', title: '居中', type: '1'})
db.menu1.insert({'id': '3',pid: '0', title: '布局', type: '1'})

db.menu1.insert({'id': '4',pid: '', title: 'js高阶', type: '0'})
db.menu1.insert({'id': '5',pid: '4', title: '内存管理', type: '1'})
db.menu1.insert({'id': '6',pid: '4', title: '代码质量', type: '1'})
db.menu1.insert({'id': '7',pid: '4', title: '代码可靠性', type: '1'})
db.menu1.insert({'id': '8',pid: '4', title: 'compose pipe', type: '1'})
db.menu1.insert({'id': '9',pid: '4', title: '高阶函数', type: '1'})
db.menu1.insert({'id': '10',pid: '4', title: '常用函数', type: '1'})
db.menu1.insert({'id': '11',pid: '4', title: '防抖和截流', type: '1'})

db.menu1.insert({'id': '12',pid: '', title: 'typescript', type: '0'})
db.menu1.insert({'id': '13',pid: '12', title: '基础类型', type: '1'})
db.menu1.insert({'id': '14',pid: '12', title: '接口', type: '1'})
db.menu1.insert({'id': '15',pid: '12', title: '数组', type: '1'})
db.menu1.insert({'id': '16',pid: '12', title: '函数类型', type: '1'})
db.menu1.insert({'id': '17',pid: '12', title: '枚举', type: '1'})
db.menu1.insert({'id': '18',pid: '12', title: '类修饰符', type: '1'})
db.menu1.insert({'id': '19',pid: '12', title: '类型断言', type: '1'})
db.menu1.insert({'id': '19',pid: '12', title: '泛型', type: '1'})
