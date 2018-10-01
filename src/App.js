import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/todoList"
// import axios from 'axios'
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allData: null
    }
  };

  componentWillMount(){
    // axios.get('https://api.tuchong.com/feed-app',{
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   },
      
    // })
    //   .then((i)=>{
    //     console.log(i)
    //   }, (j)=>{
    //     console.log(j)
    //   })



    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      crossDomain: true,
      success: function(data){
        this.setState({
          allData: data,
        })
      }.bind(this)
    })

    .then((i)=>{
      console.log(this.state.allData[0])
    })
  };

  handleDelete(value) {
    let data = this.state.allData;
    let index = data.findIndex(i=>i.id===value);
    data.splice(index, 1);
    this.setState({
      allData: data
    })
  }


  render() {
    return (
      <div>
        <h1>Todo List (data from JSON Placeholder)</h1>
        <TodoList allData={this.state.allData} handleDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
