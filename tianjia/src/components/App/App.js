import React, { Component } from 'react'
import './app.css'
import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
import Actions from '../Actions/Actions'

class App extends Component {
  state = {
    filter:'',
    todos:[
      {
        id:1,
        text:'遛狗',
        completed:true
      },
      {
        id:1,
        text:'遛狗',
        completed:false
      }
    ]
  }
  addTodo = (todo) => {
    const {todos}=this.state
    this.setState({
      todos:[...todos,{...todo,completed:false,id:todos.length + 1}]
    })
  }
  filter = (str) => {
    if(str === 'all'){
      this.setState({
        filter:''
      })
    }
    if(str === 'completed'){
      this.setState({
        filter:'completed'
      })
    }
  }
  complete = (id) => {
    const { todos } = this.state
    let newTodos = todos.map(t=>{
      if(t.id === id){
        return {...t,completed:true}
      }
      return t
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const { todos ,filter} =this.state
    let newTodos = todos
    if(filter){
      newTodos = todos.filter(t => {
        return t.completed === true
      })
    }
    return (
      <div className="app">
        <div className="main">
          <h3 className="title">
            Jer
          </h3>
          <div className="todo-list-wrap">
            <TodoList todos={newTodos}
              complete={this.complete}/>
          </div>
          <div className="form-wrap">
            <Form addTodo={this.addTodo}/>
          </div>
          <div className="actions-wrap">
            <Actions filter={this.filter}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
