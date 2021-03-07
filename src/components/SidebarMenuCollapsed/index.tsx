import React from 'react';
import * as S from './styles';

import homeIcon from '../../assets/images/icons/home-solid.svg';
import notificationsIcon from '../../assets/images/icons/bell-solid.svg';
import profileIcon from '../../assets/images/icons/user-solid.svg';
import piarIcon from '../../assets/images/icons/feather-solid-white.svg';

function SidebarMenuCollapsed() {
    return (
        <S.SidebarWrapper>
            <S.NavigationMenu>
                <a href="#">
                    <img src="https://github.com/murillot90.png" alt="Avatar"/>
                </a>
                <a href="#">
                    <img src={homeIcon} alt="Home"/>
                </a>
                <a>
                    <img src={notificationsIcon} alt="Notifications"/>
                </a>
                <a>
                    <img src={profileIcon} alt="Profile"/>
                </a>
                <a>
                    <img src={piarIcon} alt="Dê um piu"/>
                </a>
            </S.NavigationMenu>
        </S.SidebarWrapper>
    );
}

export default SidebarMenuCollapsed;