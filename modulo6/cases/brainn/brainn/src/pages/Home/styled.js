import styled from "styled-components";

export const CotainnerGenaral = styled.div`
display: grid;
grid-template-rows: 1fr 4fr;
height: 100vh;

` 
export const BoxLeft = styled.div`
display: grid;
align-items: center;
justify-content: space-around;
`

export const ContainerInferior = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
align-items: center;
justify-content: space-around;
width: 100vw;
`
export const ContainnerSelector = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
align-items: center;
justify-items: center;
width: 100vw;

select {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 12vw;
}
`
export const NameCenter = styled.div`
    display: grid;
    align-items: center;
    justify-items:center;
    width: 150px;
    height: 50px;
    border: solid black;
    `


export const BoxRight = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

p {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    border: solid black;
}
`
