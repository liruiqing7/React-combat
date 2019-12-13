import React, { Component } from 'react';

import store from './store/index.js';
import {
    getInputChangeAction,
    getAddItemAction,
    getRemoveItemAction,
    getTodoList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange); //订阅store，监听他的改变。
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleRmClick={this.handleRmClick}
            />
        )
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState());
    }

    handleBtnClick = () => {
        const action = getAddItemAction()
        this.state.inputValue === '' ? alert('请输入内容') : store.dispatch(action);
    }

    handleRmClick = (index) => {
        const action = getRemoveItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;