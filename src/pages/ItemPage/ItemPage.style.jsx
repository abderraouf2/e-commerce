import styled from 'styled-components'


export const Div = styled.div`
  height:60vh;
  display: flex;
  margin-top:10vh;
  @media screen and (max-width:800px){
    flex-direction:column;
  }
`
export const Title = styled.h2`
  
`
export const Desc = styled.div`
  display:flex;
  flex-direction:column;
  
`
export const Details = styled.div`
margin: 0% 3%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media screen and (max-width:800px){
    margin: 5% 3%;
  }
`
export const P = styled.p`
  font-size:large;
`