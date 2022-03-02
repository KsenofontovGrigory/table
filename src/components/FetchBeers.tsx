import React from 'react'

import {connect} from 'react-redux'
import {fetchBeers} from '../redux/actions'

import Table from "./Table";

interface FetchedBeers {

}

interface beers {

}

class FetchBeers extends React.Component {
  constructor({props} = FetchedBeers) {
    super(props)

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    const { fetchBeers } = this.props
    fetchBeers()
  }

  render() {
    console.log(fetchBeers)
    return (
      <Table beers={this.props.beers.beers} />
    )
  }
}

const mapDispatchToProps = {
  fetchBeers
}

const mapStateToProps = state => ({
  beers: state.beers
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchBeers)
