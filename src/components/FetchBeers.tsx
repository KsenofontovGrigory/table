import React from 'react'

import {connect} from 'react-redux'
import {fetchBeers} from '../redux/actions'

import Table, {Beers} from "./Table";

interface Props {
  fetchBeers: () => void,
  beers: {
    beers: Beers[]
  }
}

class FetchBeers extends React.Component<Props> {
  constructor(props : Props) {
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
    return (
      <Table beers={this.props.beers.beers} />
    )
  }
}

const mapDispatchToProps = {
  fetchBeers
}

const mapStateToProps = (state: any) => ({
  beers: state.beers
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchBeers)
