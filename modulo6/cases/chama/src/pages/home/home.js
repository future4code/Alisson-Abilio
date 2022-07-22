import React, { useState, useContext } from 'react';
import Header from '../../components/header';
import { UserImage } from '../../components/userImage';
import { ContainerGeneral, ContainerInfo } from './styled';
import UserInfo from '../../components/userInfo'
import { context } from '../../context';
import GlobalStateContext from '../../global/globalStateContext';


export const Home = (props) => {

    const { userData, setUserData } = useContext(GlobalStateContext)

    return (
        <ContainerGeneral>
            <Header />
            {userData ?
                <ContainerInfo>
                    <UserImage
                        url={userData?.avatar_url}
                        text={userData?.name}
                    />
                    <UserInfo
                        name={userData?.name}
                        repository={userData?.public_repos}
                        followers={userData?.followers}
                        following={userData?.following}
                    />
                </ContainerInfo>
                :
                <div>

                </div>

            }
        </ContainerGeneral>
    )
}