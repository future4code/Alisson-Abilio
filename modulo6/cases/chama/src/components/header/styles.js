import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 70vw;
    height: 130px;
    background:#888888;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: black;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const InputInfoContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputInfo = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    transition: .4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 5vw;
    height: 30px;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`