import React from 'react';
import * as S from './styles';
import { useAuth } from "../../hooks/useAuth"

import homeIcon from '../../assets/images/icons/home-solid.svg';
import notificationsIcon from '../../assets/images/icons/bell-solid.svg';
import profileIcon from '../../assets/images/icons/user-solid.svg';
import piarIcon from '../../assets/images/icons/feather-solid-white.svg';

function SidebarMenu() {
    const { user } = useAuth();

    return (
        <S.SidebarWrapper>
            <S.UserSummary>
                <img src={user.photo} alt="Avatar"/>
                <S.UserSummaryTexts>
                    <h3>{user.first_name + " " + user.last_name}</h3>
                    <p>{"@" + user.username}</p>
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