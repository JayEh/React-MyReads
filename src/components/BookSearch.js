import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookRow from './BookRow'

class BookSearch extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    setBookOnShelf: PropTypes.func.isRequired
  }

  state = {
    searchResults: []
  }

  // This blog post contains useful guidance for writing a debounce method
  // https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

  debounceId = undefined
  debounce = (func, arg, delay) => {
    clearTimeout(this.debounceId)
    this.debounceId = setTimeout(() => func.apply(null, [arg]), delay)
  }


  updateSearchResults = (searchQuery) => {
    BooksAPI.search(searchQuery.trim())
      .then((results) => {
        // if the API didn't return any results just use an empty list. 
        if (results === undefined || 'error' in results) results = []

        // update all the search results to the 'none' shelf
        results.forEach(result => {
          result['shelf'] = 'none'
        })

        //update the search results if any of your existing books are in the search results, set to the current shelf instead of none
        this.props.books.forEach(book => {
          let found = results.find(searchResult => searchResult.id === book.id)
          found && (found['shelf'] = book.shelf)
        })

        this.setState(() => ({
          searchResults: results
        }))
      })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.debounce(this.updateSearchResults, event.target.value, 500)} />
          </div>
        </div>
        <div className="search-books-results books-grid">
          <BookRow books={this.state.searchResults} setBookOnShelf={this.props.setBookOnShelf} />
        </div>

        <div className="no-results">
          {this.state.searchResults.length === 0 && (
            <h4>No search results</h4>
          )}
        </div>

      </div>
    )
  }
}

export default BookSearch