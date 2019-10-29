import React from 'react'

import { ColumnContent, Grid } from '../UI/Layout'
import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'

const Main = () => {
  return (
    <ColumnContent padding="20px 0">
      <Grid alignItems="flex-start">
        <Sidebar />
        <MainContent />
      </Grid>
    </ColumnContent>
  )
}

export default Main
