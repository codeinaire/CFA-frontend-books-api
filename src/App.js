import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import BookForm from './BookForm';
import BookList from './BookList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  };

  componentDidMount() {
    this.getBookList();
  };

  // first point of contact
  getBookList() {
    console.log('componentDidMount');
      // have
      const URL = 'https://cfa-prac-mongodb-deploy.herokuapp.com/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Aam9obi5jb20iLCJpYXQiOjE0OTUzNDI0ODJ9.7T2rSEci75f7US39xgi6gk439yMYA0sqtrSjQyRR9oQ';
      // '=>' is like the .bind that we have used previously
      axios.get(URL)
        .then((response) => {
          console.log(response.data);
          // setting it as a state
          this.setState({ books: response.data });
        })
        .catch(function (error){
          console.log(error);
        });
    };



  render() {
    console.log('render()');
    return (
      <div>
        <h1>Books Front End</h1>
        <BookList books={this.state.books} />
        {/* <BookForm getBookList={() => this.getBookList()}/>
        {this.state.books.length <  1 ? <p>Loading...</p> : <BookList books={this.state.books} /> } */}
      </div>
    );
  }
}

export default App;
