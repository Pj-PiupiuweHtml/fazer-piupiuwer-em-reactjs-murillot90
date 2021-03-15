import React from 'react';
import * as S from './styles';
import { useAuth } from "../../hooks/useAuth"

import homeIcon from '../../assets/images/icons/home-solid.svg';
import profileIcon from '../../assets/images/icons/user-solid.svg';
import piarIcon from '../../assets/images/icons/feather-solid-white.svg';
import favFilledIcon from '../../assets/images/icons/star-solid.svg';
import { Link } from 'react-router-dom';

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
                <Link to="/feed">
                    <img src={homeIcon} alt="Home"/>
                    Home
                </Link>
                <Link to="/favorites">
                    <img src={favFilledIcon} alt="Notifications"/>
                    Favorite Pius
                </Link>
                <Link to="#" onClick={() => alert("In construction")}>
                    <img src={profileIcon} alt="Profile"/>
                    Profile
                </Link>
                <Link to="/feed" id="piar-button">
                    <img src={piarIcon} alt="Dê um piu"/>
                    Dê um piu
                </Link>
            </S.NavigationMenu>
        </S.SidebarWrapper>
    );
}

export default SidebarMenu;