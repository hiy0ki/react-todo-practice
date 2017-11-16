import React from 'react';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  handleTodoSubmit(todo) {
    todo.id = new Date();
    const newMessage = this.state.todos.concat(todo);
    this.setState({todos: newMessage});
  }

  handleTodoDelete(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id
      })
    });
  }

  render() {
    const todoItems = this.state.todos.map((todo) => {
      return (
        <TodoList key={todo.id} todo={todo} onTodoDelete={this.handleTodoDelete.bind(this)} />
      )
    });

    return (
        <div className="todoBox">
          <InputForm onTodoSubmit={this.handleTodoSubmit.bind(this)} />
          {todoItems}
        </div>
    )
  }
}

class InputForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value.trim();
    const text = this.refs.text.value.trim();

    if (!title || !text) {
      return;
    }

    this.props.onTodoSubmit({title: title, text: text});

    this.refs.title.value = '';
    this.refs.text.value = '';
  }

  render() {
    return (
        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="task" ref="title" />
          <input type="text" placeholder="detail" ref="text" />
          <button>add</button>
        </form>
    );
  }
}


class TodoList extends React.Component {
  handleDelete() {
    this.props.onTodoDelete(this.props.todo.id);
  }

  render() {
    return (
      <div className="todo">
        <h2 className="todoTitle"> {this.props.todo.title}</h2>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleDelete.bind(this)}>delete</button>
      </div>
    )
  }
}
