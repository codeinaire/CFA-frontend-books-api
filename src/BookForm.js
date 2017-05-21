import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class BookForm extends Component {

  handleInputChange(e) {
    // console.log(e.target.value);
  };

  focus() {
    // focus onto the form input
    this.titleInput.focus();
    this.authorInput.focus();
    this.descriptionInput.focus();
  };

  newBook () {
    const URL = 'https://cfa-prac-mongodb-deploy.herokuapp.com/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Aam9obi5jb20iLCJpYXQiOjE0OTUzNDI0ODJ9.7T2rSEci75f7US39xgi6gk439yMYA0sqtrSjQyRR9oQ';
    axios.post(URL + '&title=' + this.titleInput.value + '&author=' + this.authorInput.value + '&description=' + this.descriptionInput.value )
      .then((response) => {
        console.log(response);
        this.titleInput.value = '';
        this.authorInput.value = '';
        this.descriptionInput.value = '';
        this.props.getBookList();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render () {
    return (
      <div>
        {/*  */}
        <span>Title: </span>
        <input type="text" ref={(input) => { this.titleInput = input; }} /*onChange={(e) => this.handleInputChange(e)}*//>
        <br/>
        <span>Author: </span>
        <input type="text" ref={(input) => { this.authorInput = input; }} />
        <br/>
        <span>Description: </span>
        <input type="text" ref={(input) => { this.descriptionInput = input; }} />
        <br/>
        <button onClick={() => this.newBook()}>Create...</button>

      </div>

    )
  }
}

BookForm.propTypes = {
  getBooksList: PropTypes.func.isRequired,
};


export default BookForm;
