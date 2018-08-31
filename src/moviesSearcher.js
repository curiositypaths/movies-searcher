import React, { Component } from 'react'
import SearchBar from './searchBar'
import SearchResults from './searchResults'

class MoviesSearcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Account for an initial search term provided by a parent component
            currentSearchTerm: (props.initialSearchTerm || ''),
            searchResults:[]
        }
        this.apiAdapter = props.apiAdapter
    }

    handleNewSearchTerm = event => {
        this.setState({ currentSearchTerm: event.target.value }, this.fetchMovies)
    }

    componentDidMount() {
        this.fetchMovies(this.state.currentSearchTerm)
    }

    fetchMovies = () => {
        const searchResults = this.apiAdapter.postSearch(this.state.currentSearchTerm)
        this.setState({ searchResults })
    }

    render() {
        return (
            <div>
                <SearchBar handleNewSearchTerm={this.handleNewSearchTerm} searchTerm={this.state.currentSearchTerm}/>
                <SearchResults searchResults={this.state.searchResults} />
            </div>
        )
    }
}

export default MoviesSearcher