import React, { Component } from 'react';

class Button extends Component {

    handleDelete(){
        this.props.handleDelete();
    }


  render() {
    return (
      <button onClick={this.handleDelete.bind(this)}>Delete</button>
    );
  }
}

export default Button;
