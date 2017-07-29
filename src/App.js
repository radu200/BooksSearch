import React, { Component } from 'react';
import './App.css';
import Profile from './profile';
import {  FormControl, Button} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      books:null
    }
  }
  search(){
  //  console.log('this.state', this.state)
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    let FETCH_URL = `${URL}q=${this.state.query}`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const books = json.items[0];
      this.setState({books});
    })
  }
  render() {
    return (
      <div className="App container">
         <div className="App-title"><h1>Search for a Book</h1></div>
          <FormControl
           className="input"
            type="text"
             placeholder="Search "
             value={this.state.query}
             onChange={event => {this.setState({query:event.target.value})}}
             onKeyPress={event =>{
              if (event.key === 'Enter'){
              this.search()
               }
             }}
               />
           <Button className="button" onClick={()=> this.search()} >SEARCH</Button>
          <Profile books={this.state.books}/>
      </div>
    );
  }
}

export default App;
