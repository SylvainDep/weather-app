import React from 'react'

import classes from './Credentials.module.css'

const Credentials = (props) => {
  return (
    <div className={classes.Credentials}>
      <p>Developped with <img className={classes.triskel} src="http://corinne-fablet-therapeute.com/images/triskel_blanc.png?crc=3807833994" /> by Sylvain Depardieu</p>
      <p>View Code on <a href="https://github.com/SylvainDep/weather-app">Github</a></p>
    </div>
  )
}

export default Credentials
