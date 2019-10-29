import React from 'react'
import styled from 'styled-components'

const NavList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  width: 100%;
`

const NavItem = styled.li`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em

  &:not(:last-child) {
    border-bottom: 1px solid grey
  }
`

const Nav = () => {
  return (
    <NavList>
      <NavItem>Home</NavItem>
      <NavItem>Friends</NavItem>
      <NavItem>Profile</NavItem>
      <NavItem>Settings</NavItem>
      <NavItem>About</NavItem>
    </NavList>
  )
}

export default Nav
