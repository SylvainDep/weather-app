import styled from 'styled-components'

export const ColumnContent = styled.div`
  margin: auto;
  width: 1200px;
  max-width: calc(100% - 20px);
  height: 100%;
  padding: ${props => props.padding ? props.padding : '0'}
`

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'}
  height: 100%;
  width: 100%;
`

export const UIBlock = styled.div`
  margin: 20px 0;
  background-color: white;
  border-radius: 2px;
  padding: ${props => props.padding ? props.padding : '10px'}
`
