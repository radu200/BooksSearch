import React, {Component} from 'react';
import './App.css';
import Books from './books';
import {FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: null
    }
  }
  search() {
    console.log('this.state', this.state)
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
    fetch(URL, {method: 'GET'}).then(response => response.json()).then(json => {
      const books = json.items[0];
      this.setState({books});
    })
  }
  render() {
    return (
      <div className="App container ">
        <h3 className="text-center">Search For Any Book</h3>
        <FormControl className="input" type="text" placeholder="Search " value={this.state.query} onChange={event => {
          this.setState({query: event.target.value})
        }} onKeyPress={event => {
          if (event.key === 'Enter') {
            this.search()
          }
        }}/>
        <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
