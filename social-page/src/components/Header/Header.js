import React from 'react'
import styled from 'styled-components'

import PersonMain from './PersonMain/PersonMain'
import StatsMain from './StatsMain/StatsMain'
import { ColumnContent, Grid } from '../UI/Layout'

const HeaderContainer = styled.div`
  position: relative;
  background: url(https://source.unsplash.com/1600x900/?background) no-repeat center;
  background-size: cover;
  height: 400px;
`

const HeaderContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <ColumnContent>
              <Grid>
                <PersonMain />
                <StatsMain />
              </Grid>
          </ColumnContent>
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
