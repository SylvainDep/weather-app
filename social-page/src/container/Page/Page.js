import React, { Component } from 'react'
import { connect }  from 'react-redux'

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import * as actions  from '../../store/actions/person'

class Map extends Component {
  componentDidMount() {
    this.props.onFetchPerson()
  }

  render() {
    let page = <div></div>

    if (!this.props.loadingPerson) {
      page = (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )
    }

    return (
      <div>
        {page}
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    personData: state,
    loadingPerson: state.loadingPerson
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onFetchPerson: () => dispatch(actions.fetchPersonData())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Map)
