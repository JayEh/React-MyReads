import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        setBookOnShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">

                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}")` }}></div>

                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf} onChange={(event) => this.props.setBookOnShelf(this.props.book, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>

                </div>

                <div className="book-title">{this.props.book.title}</div>
                {this.props.book.authors && (this.props.book.authors.map((authorName) => (
                    <div key={authorName} className="book-authors">{authorName}</div>
                )))}

            </div>
        )
    }
}

export default Book