import React from 'react'
import styled from 'styled-components'

import StatsMainItem from './StatsMainItem/StatsMainItem'

const StatsMainContainer = styled.div`
  display: flex;
  height: 100%;
`

const StatsMain = () => {
  return (
    <StatsMainContainer>
      <StatsMainItem name="followers" value={456} />
      <StatsMainItem name="friends" value={183} />
      <StatsMainItem name="publication" value={2498} />
    </StatsMainContainer>
  )
}

export default StatsMain
