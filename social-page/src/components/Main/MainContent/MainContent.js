import React from 'react'
import styled from 'styled-components'

import { UIBlock } from '../../UI/Layout'

const MainContentContainer = styled.div`
  flex: 0 0 75%;
  padding: 5px;
  box-sizing: border-box;
`

const MainContent = () => {
  return (
    <MainContentContainer>
        <p>Salut</p>
    </MainContentContainer>
  )
}

export default MainContent
