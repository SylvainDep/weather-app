import React from 'react'
import styled from 'styled-components'

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  height: 100%;
  padding: 0 10px;
  margin-left: 5px;
  width: 80px;

  & p {
    margin: 5px 0
  }
`

const StatsMainItem = (props) => {
  return (
    <StatsItem>
      <p>{props.name}</p>
      <p>{props.value}</p>
    </StatsItem>
  )
}

export default StatsMainItem
