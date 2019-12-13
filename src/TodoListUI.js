import React from 'react'; //用于无状态组件，性能比较高。
//import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{ position: 'absolute', margin: '10px 0 0 10px' }} >
            <Input
                value={props.inputValue}
                onChange={props.handleInputChange}
                placeholder=' todo info'
                style={{ width: '300px', marginRight: '10px' }} />
            <Button
                onClick={props.handleBtnClick}
                type="primary"
            >
                提交
        </Button>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                        // onClick={props.handleRmClick.bind(null, index)} 
                        onClick={() => props.handleRmClick(index)}
                    // onClick={props.handleRmClick(index)} 
                    >{item}</List.Item>
                )}
            />
        </div>
    )
}
{/*
class TodoListUI extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', margin: '10px 0 0 10px' }} >
                <Input
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                    placeholder=' todo info'
                    style={{ width: '300px', marginRight: '10px' }} />
                <Button
                    onClick={this.props.handleBtnClick}
                    type="primary"
                >
                    提交
            </Button>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            // onClick={this.handleRmClick.bind(null, index)} 
                            onClick={() => this.props.handleRmClick(index)}
                        // onClick={this.handleRmClick(index)} 
                        >{item}</List.Item>
                    )}
                />
            </div>
        )
    }
}
*/}
export default TodoListUI