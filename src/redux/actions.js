export function setEditorHide (data) {
    return {
        type: 'SET_EDITOR_HIDE',
        data
    };
}
export function setEditorContent (data) {
    return {
        type: 'SET_EDITOR_CONTENT',
        data
    };
}
export function setCurrentNode (id, nodeType) {
    return {
        type: 'SET_CURRENT_NODE',
        id,
        nodeType
    };
}
export function setMenuRefresh (isRefresh) {
    return {
        type: 'SET_MENU_REFRESH',
        isRefresh
    };
}
