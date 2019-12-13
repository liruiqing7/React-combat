import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({ //接收从组件中传过来的参
    type: CHANGE_INPUT_VALUE, //接收类型（条件）
    value                   //返回一个action对象
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getRemoveItemAction = (index) => ({
    type: REMOVE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('../list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action);
            console.log(data)
        })
    }
}