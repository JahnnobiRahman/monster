import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

import { SearchBox } from './components/search-box/search-box.component'; 
 
class App extends React.Component {
  constructor() {
    super();   //class component : a class component 
                        //has state 
    this.state = {
      monsters: [],
      searchField : ''

    };

   // this.handleChange = this.handleChange.bind(this); //this' knows that which func it states 
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {  //creating own method . arrow func already binds , so no need to call in constructor
    this.setState({
      searchField: e.target.value
    })
  }
  render() {
    const 
      { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()
      ))
    
    return (
      
      <div className="App">

        <SearchBox
           placeholder= ' search monsters '
           handleChange = {this.handleChange }
        />
        
       
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
