import React from 'react'

const SearchResults = props => <ul>{props.searchResults.map((movieTitle, id) => <li key={id}>{movieTitle}</li>)}</ul>

export default SearchResults