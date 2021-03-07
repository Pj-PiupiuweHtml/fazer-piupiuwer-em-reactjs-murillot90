import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';

import piarIcon from '../../assets/images/icons/feather-solid-white.svg';

import api from '../../services/api';

import * as S from './styles';

function Feed() {
    return (
        <>
            <PageHeader/>
            <S.ContentWrapper>
                <SidebarMenu/>
                <SidebarMenuCollapsed/>
                <S.FeedContent>
                    <S.PiarInputArea>
                        <img src="https://github.com/murillot90.png" alt="Avatar"/>
                        <S.PiarInput>
                            <textarea placeholder="Dê um piu!"></textarea>
                            <S.PiarInputWarning>Empty piu</S.PiarInputWarning>
                            <S.PiarInputFooter>
                                <span>0/140</span>
                                <button><img src={piarIcon} alt="Profile"/>Piar</button>
                            </S.PiarInputFooter>
                        </S.PiarInput>
                    </S.PiarInputArea>
                    <S.PiusSection>

                    </S.PiusSection>
                </S.FeedContent>
            </S.ContentWrapper>
        </>
    );
}

export default Feed;