import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      });
  }

  setBookOnShelf = (book, shelf) => {
    // take the list of current books in the library
    let currentBooks = Array.from(this.state.books)
    if (!currentBooks.includes(book))
      currentBooks.push(book)

    currentBooks[currentBooks.findIndex((x) => x.id === book.id)]['shelf'] = shelf
    this.setState(() => ({
      books: currentBooks
    }))

    // then call the API and use the api and provide (book, shelf)
    BooksAPI.update(book, shelf)
      .then((response) => console.log(`BooksAPI.update (${book}, ${shelf}) response was `, response))
  }

  render() {
    return (
      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Route path='/search' render={() => (
            <BookSearch books={this.state.books} setBookOnShelf={this.setBookOnShelf} />
          )}>
          </Route>

          <Route exact path='/' render={() => (
            <div>
              <div className="list-books-content">
                <BookShelf shelfName={'Currently Reading'} books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} setBookOnShelf={this.setBookOnShelf} />
                <BookShelf shelfName={'Want to Read'} books={this.state.books.filter((book) => book.shelf === 'wantToRead')} setBookOnShelf={this.setBookOnShelf} />
                <BookShelf shelfName={'Read'} books={this.state.books.filter((book) => book.shelf === 'read')} setBookOnShelf={this.setBookOnShelf} />
              </div>

              <Link to='/search'>
                <div className="open-search">
                  <button >Add a book</button>
                </div>
              </Link>
            </div>
          )}>
          </Route>
        </div>
      </div>
    )
  }
}

export default BooksApp
