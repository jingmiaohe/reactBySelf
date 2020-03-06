// 默认值
import defaultState from './state.js'

const reducer = function(state = defaultState, action) {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_EDITOR_HIDE':
            return Object.assign({}, state, {
                hideEditor: action.data
            })
        case 'SET_EDITOR_CONTENT':
            return Object.assign({}, state, {
                editorContent: action.data
            })
        case 'SET_CURRENT_NODE':
            return Object.assign({}, state, {
                currentNodeId: action.id,
                currentNodeType: action.nodeType
            })
        case 'SET_MENU_REFRESH':
            return Object.assign({}, state, {
                shouldRefreshMenu: action.isRefresh
            })
        default:
            return state
    }
}
export default reducer
