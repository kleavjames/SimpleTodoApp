import React, { Component } from 'react';
import '../css/additem.css';

export default class AddItem extends Component {

    handleSubmit (e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }

    render () {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }
}
