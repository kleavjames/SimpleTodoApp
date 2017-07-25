import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import '../css/todoapp.css';

export default class TodoApp extends Component {
    constructor (props) {
        super (props);
        // initial state
        this.state = {
            todos: ['master javascript', 'master react', 'master redux', 'code everyday', 'win souls', 'make disciples']
        }

        // to work in the callback
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    // custom function
    // filter the todo items and if 'false', filter out item
    onDelete (item) {
        const updatedTodos = this.state.todos.filter(
            (val, index) => { return item !== val; }
        );

        this.setState({
            todos: updatedTodos // updated state
        });
    }

    // add item to the todos array
    onAdd (item) {
        const updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos // updated state
        });
    }

    render () {

        // list all possible items whichi is in the 'todos' array
        const todos = this.state.todos;
        const listItems = todos.map( (item, index) => {
            return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
        });

        return (
            <div id="todo-list">
                <p>What I always do:</p>
                <ul>{listItems}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }
}
