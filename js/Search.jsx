const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch
          searchTerm={this.state.searchTerm}
        />
        <div className='shows'>
          {this.props.route.shows
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

Search.propTypes = {
  route: React.PropTypes.shape({
    shows: React.PropTypes.arrayOf(React.PropTypes.object)
  })
}

module.exports = Search
