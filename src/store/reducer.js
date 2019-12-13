import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    INIT_LIST_ACTION
} from './actionTypes.js'

const defaultState = {
    inputValue: '',
    list: []
}

//reducer 可以接收state，但是绝不能修改state，所以要拷贝一份。
//纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。
//例如，Ajax请求或者{ newState.inputValue = new Data() },就已经不是纯函数了，因为newState受到时间的影响，他的输出不是固定的。
//副作用指的是对参数的修改，reducer中不可以对state进行修改。
export default (state = defaultState, action) => {
    //state:存放整个数据,默认空数据
    //action:用户传递过来的条件
    let newState = undefined;
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case REMOVE_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            newState.inputValue = '';
            return newState;
        case INIT_LIST_ACTION:
            newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState;
        default:
            return state;
    }
}