import moviesData from './data'

const moviesAdapter = {
    postSearch: function searchMoviesIndexFor(searchTerm) {
        if (searchTerm) {
            return moviesData.movies.map(movieObj => movieObj.title).filter(movieTitle => movieTitle.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            return []
        }

    }
}

export default moviesAdapter