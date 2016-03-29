/* eslint-env mocha */
const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const data = require('../public/data')
const enzyme = require('enzyme')
const { shallow } = enzyme

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>HugVid</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(data.shows.length)
  })
})
