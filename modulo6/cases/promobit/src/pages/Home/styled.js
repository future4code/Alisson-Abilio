import styled from "styled-components"


export const HeaderHome = styled.div`
display: grid;
grid-template-rows: 1fr   ;
grid-template-columns: 1fr  ;
border: 5px solid green;
margin: 5px;
`
export const BoxButton = styled.div`
display: flex;
border: 5px solid blue;




`
export const Cards = styled.div`
  display:grid ;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  border: 5px solid purple;
  align-content: center;
  margin: 3px;
  justify-items: center;
  
  img {
    border: 5px solid black;
    align-content:center;
    height: 25rem;
    box-shadow: 20px 20px 50px black;
    border-radius: 15px;
}
`
export const Body = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 3px solid black;
  height: 1fr;
  width: 1fr; */
`