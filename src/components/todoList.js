import React, { Component } from 'react';
import EachTodo from "./eachTodo"

class TodoList extends Component {

  handleDelete(e){
    this.props.handleDelete(e)
  }

  render() {
    let todos;
    if(this.props.allData){
      todos = this.props.allData.map(i=>{
        return (<EachTodo content={i} key={i.id} handleDelete={this.handleDelete.bind(this)}/>)
      })
    }

    return (
      <div className="list">
        {todos}
      </div>
    );
  }
}

export default TodoList;
