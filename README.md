# MyReads Project

This project is a requirement of the React Nanodegree Program offered by Udacity.

The MyReads project touches on the core concepts of React by rendering a UI that maintains state and
comminucates with a web API. The user is presented with a book shelf with 3 shelves: Currently Reading, Want to Read and Read.
Each book on the shelf can be moved to any other shelf of the user's choosing. 
Example: Move a book from Want to Read to Currently Reading.
We also implement a search page that allows the user to search for and add new books to our book shelf. 
Example: Search for the term 'artificial intelligence' and choose one of the results, then add it to Want to Read. When the user returns to the home page the book will be on the Want to Read shelf.


## How to Install and Launch

To get started and run the project right away:

* Clone the repo from Github: https://github.com/JayEh/React-MyReads.git
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). 
That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
