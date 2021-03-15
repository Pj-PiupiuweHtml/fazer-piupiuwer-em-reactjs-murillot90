import React from 'react';
import * as S from './styles';

import homeIcon from '../../assets/images/icons/home-solid.svg';
import favFilledIcon from '../../assets/images/icons/star-solid.svg';
import profileIcon from '../../assets/images/icons/user-solid.svg';
import piarIcon from '../../assets/images/icons/feather-solid-white.svg';
import { Link } from 'react-router-dom';

function SidebarMenuCollapsed() {
    return (
        <S.SidebarWrapper>
            <S.NavigationMenu>
                <Link to="#">
                    <img src="https://github.com/murillot90.png" alt="Avatar"/>
                </Link>
                <Link to="/feed">
                    <img src={homeIcon} alt="Home"/>
                </Link>
                <Link to="/favorites">
                    <img src={favFilledIcon} alt="Favorites"/>
                </Link>
                <Link to="#">
                    <img src={profileIcon} alt="Profile"/>
                </Link>
                <Link to="#">
                    <img src={piarIcon} alt="Dê um piu"/>
                </Link>
            </S.NavigationMenu>
        </S.SidebarWrapper>
    );
}

export default SidebarMenuCollapsed;