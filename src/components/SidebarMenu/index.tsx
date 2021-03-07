import React from 'react';
import * as S from './styles';

import homeIcon from '../../assets/images/icons/home-solid.svg';
import notificationsIcon from '../../assets/images/icons/bell-solid.svg';
import profileIcon from '../../assets/images/icons/user-solid.svg';
import piarIcon from '../../assets/images/icons/feather-solid-white.svg';

function SidebarMenu() {
    return (
        <S.SidebarWrapper>
            <S.UserSummary>
                <img src="https://github.com/murillot90.png" alt="Avatar"/>
                <S.UserSummaryTexts>
                    <h3>Murillo Teixeira</h3>
                    <p>@murillo_t</p>
                </S.UserSummaryTexts>
            </S.UserSummary>
            <S.NavigationMenu>
                <a href="#">
                    <img src={homeIcon} alt="Home"/>
                    Home
                </a>
                <a>
                    <img src={notificationsIcon} alt="Notifications"/>
                    Notifications
                </a>
                <a>
                    <img src={profileIcon} alt="Profile"/>
                    Profile
                </a>
                <a id="piar-button">
                    <img src={piarIcon} alt="Dê um piu"/>
                    Dê um piu
                </a>
            </S.NavigationMenu>
        </S.SidebarWrapper>
    );
}

export default SidebarMenu;