import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'

import BookRow from './BookRow'

class BookShelf extends React.Component {
    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,       
        setBookOnShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <BookRow books={this.props.books} setBookOnShelf={this.props.setBookOnShelf} />
            </div>
        )
    }
}

export default BookShelf