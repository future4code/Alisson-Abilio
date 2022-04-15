import React from "react";
import { BoxInfo, BoxInfoFollowers, BoxInfoFollowing, BoxInfoName, BoxInfoRepository, UserBoxInfo, UserBoxInfoBottom, UserBoxInfotop } from "./styled";

const UserInfo = (props) => {
    return (
        <UserBoxInfo>
            <UserBoxInfotop>

                <BoxInfoName>
                    <h1>{props?.name}</h1>
                    <h5>Nome</h5>
                </BoxInfoName>

                <BoxInfoRepository>
                    <h1>{props?.repository}</h1>
                    <h5>Repositório</h5>
                </BoxInfoRepository>
            </UserBoxInfotop>
            <UserBoxInfoBottom>

                <BoxInfoFollowers>
                    <h1>{props?.followers}</h1>
                    <h5>Seguidores</h5>
                </BoxInfoFollowers>

                <BoxInfoFollowing>
                    <h1>{props?.following}</h1>
                    <h5>Segue</h5>
                </BoxInfoFollowing>
            </UserBoxInfoBottom>

        </UserBoxInfo>
    )
}
export default UserInfo


{/* 

    
    


   
   
</UserBoxInfoBottom>
</UserBoxInfo> */}