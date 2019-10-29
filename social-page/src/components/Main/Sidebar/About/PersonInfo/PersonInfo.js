import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const PersonInfoContainer = styled.p`
  text-align: left;
`

const PersonInfo = (props) => {
  return (
    <PersonInfoContainer>
      <b>{props.label}:</b> {props.value}
    </PersonInfoContainer>
  )
}

const mapStatetoProps = state => {
  return {
    gender: state.gender
  }
}



export default connect(mapStatetoProps)(PersonInfo)
