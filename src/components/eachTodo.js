import React, { Component } from 'react';
import Button from './Button';

class EachTodo extends Component {

    handleDelete(value){
        this.props.handleDelete(value)
    }

  render() {
      let button;
      if(this.props.content.completed) {
        button = <Button handleDelete={this.handleDelete.bind(this, this.props.content.id)} />
      }
    return (
        // {content}
      <div className="each">
        <p  className={this.props.content.completed?undefined:'unfinished'}>{this.props.content.title}</p>
        {button}
      </div>
    );
  }
}

export default EachTodo;
