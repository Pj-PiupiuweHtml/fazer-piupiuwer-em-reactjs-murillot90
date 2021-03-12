import React from 'react';
import * as S from './styles';
import { useAuth } from "../../hooks/useAuth"

import kiwiImg from '../../assets/images/kiwi-bird-solid.svg';
import signOutImg from '../../assets/images/icons/sign-out-alt-solid.svg';


function PageHeader() {
    const { logout } = useAuth();

    return (
        <S.Header>
            <S.Container>
                <S.Logo>
                    <img src={kiwiImg} alt="Piupiuwer's logo"/>
                    <h2>Piupiuwer</h2>
                </S.Logo>
                <S.SideOptions>
                    <input type="text" placeholder="Search here!"/>
                    <button onClick={ logout }>
                        <img src={signOutImg} alt="Sign Out"/>
                    </button>
                </S.SideOptions>
            </S.Container>
        </S.Header>
    );
}

export default PageHeader;