import React, { useContext } from 'react';
import { getData } from '../../api';
import GlobalStateContext from '../../global/globalStateContext';
import { HeaderSection, HeaderTitle, InputInfoContainer, InputInfo, HeaderSearchButton } from './styles';


const Header = () => {

    const {
        inputValue, setInputValue,
        userData, setUserData

    } = useContext(GlobalStateContext)


    return (
        <HeaderSection>
            <HeaderTitle>Github Search User</HeaderTitle>
            <InputInfoContainer>
                <InputInfo value={inputValue} onChange={e => setInputValue(e.target.value)} />

                <HeaderSearchButton onClick={() => getData(setUserData, inputValue)} >
                <ion-icon name="search-sharp"></ion-icon>
            </HeaderSearchButton>
        </InputInfoContainer>
        </HeaderSection >
    )
};
export default Header;