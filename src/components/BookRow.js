import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'

import Book from './Book'

class BookRow extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        setBookOnShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} setBookOnShelf={this.props.setBookOnShelf} />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookRow