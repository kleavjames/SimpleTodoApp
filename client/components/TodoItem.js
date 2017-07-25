import React, { Component } from 'react';
import '../css/todoitem.css';

export default class TodoItem extends Component {

    //custom function
    //gets the onDelete props and execute event
    handleDelete () {
        this.props.onDelete(this.props.item);
    }

    render() {
        // This syntax ensures `this` is bound within handleDelete
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={ (item) => this.handleDelete(item) }> x </span>
                </div>

            </li>
        );
    }
}
