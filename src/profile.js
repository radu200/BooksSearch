import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    //console.log('this.props',this.props);
   let books = { volumeInfo:{imageLinks:{smallThumbnail:""},authors:[], title:'', pageCount:'', description:''}};
    books = this.props.books !== null ? this.props.books : books;
    return (
      <div className="profile">
        <img
          alt="Book Image"
         src={books.volumeInfo.imageLinks.smallThumbnail}/>
       <div className="author">Author : {books.volumeInfo.authors}</div>
         <div className="title">Title : {books.volumeInfo.title}</div>
         <div className="pages">Number of Pages : {books.volumeInfo.pageCount}</div>
         <label className="description">Description : </label>
        <div>{books.volumeInfo.description}</div>
      </div>
    )
  }
}

export default Profile;
