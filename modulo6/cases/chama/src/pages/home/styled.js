import styled from 'styled-components';


export const ContainerGeneral = styled.main `
    width: 100vw;
    height: 100vh;
    background: #666666;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70vw;
    height: 300px;
    background:#888888;
    border-radius: 10px;
    margin-top: 15px;
`
export const UserBoxInfo = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width: 70vw;
    height: 300px;
    background:#888888;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
   
`
export const UserBoxInfotop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
   
`
export const UserBoxInfoBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
   
`