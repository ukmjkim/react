import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Totos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        };
    }
    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }
    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }
    getTodos() {
        this.setState({
            todos: TodoStore.getAll(),
        });
    }
    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        })
        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Totos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}