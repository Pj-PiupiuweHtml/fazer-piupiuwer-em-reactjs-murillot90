import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth"
import axios from 'axios';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';
import PiuContainer from '../../components/PiuContainer';

import { User, Piu, PiuLike } from '../../services/entities';

import * as S from './styles';

import piarIcon from '../../assets/images/icons/feather-solid-white.svg';
import userEvent from '@testing-library/user-event';

function Feed() {
    const { user } = useAuth();
    const [piuLength, setPiuLenght] = useState(0);

    return (
        <>
            <PageHeader/>
            <S.ContentWrapper>
                <SidebarMenu/>
                <SidebarMenuCollapsed/>
                <S.FeedContent>
                    <S.PiarInputArea>
                        <img src={user.photo} alt="Avatar"/>
                        <S.PiarInput>
                            <textarea placeholder="Dê um piu!"></textarea>
                            <S.PiarInputWarning>Empty piu</S.PiarInputWarning>
                            <S.PiarInputFooter>
                                <span>{piuLength}/140</span>
                                <button><img src={piarIcon} alt="Profile"/>Piar</button>
                            </S.PiarInputFooter>
                        </S.PiarInput>
                    </S.PiarInputArea>
                    <S.PiusSection>
                        <PiuContainer/>
                        <PiuContainer/>
                        <PiuContainer/>
                    </S.PiusSection>
                    <S.UnsuccessfulSearchTag>
                        Não foi encontrado nenhum piu ou usuário :(
                    </S.UnsuccessfulSearchTag>
                </S.FeedContent>
            </S.ContentWrapper>
        </>
    );
}

export default Feed;