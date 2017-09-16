import React, {Component} from 'react';
import './App.css';

class Books extends Component {
  render() {
    //console.log('this.props',this.props);
    let books = {
      volumeInfo: {
        imageLinks: {
          thumbnail: ''
        },
        authors: [],
        title: '',
        pageCount: '',
        description: ''
      }
    };
    books = this.props.books !== null
      ? this.props.books
      : books;
    if (this.props.books !== null) {
      return <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img alt='' src={books.volumeInfo.imageLinks.thumbnail}/>
          </div>
          <div className=" about-book col-md-8">
            <ul className="list-group">
              <li className=" list-group-item">
                <strong>Title :</strong>
                {books.volumeInfo.title}</li>
              <li className=" list-group-item ">
                <strong>Author :
                </strong>{books.volumeInfo.authors}</li>
              <li className="list-group-item">
                <strong>Category:
                </strong>{books.volumeInfo.categories}
              </li>
              <li className="list-group-item">
                <strong>Publisher:
                </strong>{books.volumeInfo.publisher}
              </li>
              <li className="list-group-item">
                <strong>langauge:
                </strong>{books.volumeInfo.language}
              </li>
              <li className=" list-group-item pages">
                <strong>Number of Pages :</strong>
                {books.volumeInfo.pageCount}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <br/>
          <div className="description col-md-12">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Description:
                </strong><br></br>{books.volumeInfo.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    } else {
      return null
    }

  }
}


export default Books;
