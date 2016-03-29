const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'this is the default searchTerm'
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>HugVid</h1>
          <input
            type='text'
            className='search-input'
            placeholder='Search'
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div className='shows'>
          {data.shows
            .filter((show) => (
              `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            ))
            .map((show, index) => (
              <ShowCard key={show.imdbID} id={index} {...show} />
            ))
          }
        </div>
      </div>
    )
  }
}

module.exports = Search
