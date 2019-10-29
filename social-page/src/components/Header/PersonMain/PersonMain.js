import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import classes from './PersonMain.module.css'

const PersonMainContainer = styled.div`
  display: flex;
  height: 100%;
`

const PersonMain = (props) => {
  console.log(props.picture)

  return (
    <PersonMainContainer>
      <img className={classes.profile_img} src={props.picture} />
      <div className={classes.name}>
        <p>{props.firstname} {props.lastname}</p>
      </div>
    </PersonMainContainer>
  )
}

const mapStatetoProps = state => {
  return {
    picture: state.picture.large,
    firstname: state.name.first,
    lastname: state.name.last
  }
}

export default connect(mapStatetoProps)(PersonMain)
