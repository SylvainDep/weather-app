import React from 'react'
import styled from 'styled-components'

import { UIBlock } from '../../UI/Layout'
import Nav from './Nav/Nav'
import About from './About/About'

const SidebarContainer = styled.div`
  flex: 0 0 25%;
  padding: 5px;
  box-sizing: border-box;
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <UIBlock padding="0">
        <Nav />
      </UIBlock>
      <UIBlock>
        <About />
      </UIBlock>
    </SidebarContainer>
  )
}

export default Sidebar
