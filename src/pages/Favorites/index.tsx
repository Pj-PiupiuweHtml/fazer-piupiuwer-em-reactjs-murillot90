import React, { useState, useEffect, FormEvent, useRef, createContext } from 'react';
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

export const SearchTextContextFav = createContext({
    setSearchTextFav: (text: string) => {}
});

function Feed() {
    const { user } = useAuth();
    
    const [piuArray, setPiuArray] = useState<Array<Piu>>([] as Array<Piu>);
    const [searchTextFav, setSearchTextFav] = useState('');
    let numberOfVisiblePius = 0;
    
    let favArray: Array<String> = [];

    const loadFavorites = async () => {
        try {
            const response = await api.get('/pius/')
            response.data.map((piu: Piu) => { 
                if(favArray.indexOf(piu.id) != -1) {
                    setPiuArray(piuArray => [...piuArray, piu]);
                }
            });
        } catch {
            alert("Tente carregar pius novamente mais tarde!")
        }
    }

    useEffect(() => {
        favArray = [];
        user.favorites.map(favorite => {
            favArray = [...favArray, favorite.id];
        });
        loadFavorites();
    }, [user.favorites])

    useEffect(() => {
        console.log(searchTextFav)
    }, [searchTextFav])

    return (
        <>
            <SearchTextContextFav.Provider value={{setSearchTextFav}}>
                <PageHeader/>
                <S.ContentWrapper>
                    <SidebarMenu/>
                    <SidebarMenuCollapsed/>
                    <S.FeedContent>
                        <S.PiusSection>
                            {piuArray.map(piu => {
                                const filter = searchTextFav.toUpperCase().trim();
                                const username = piu.user.username.toUpperCase();
                                const text = piu.text.toUpperCase();
                                const name = (piu.user.first_name + " " + piu.user.last_name).toUpperCase()

                                if(searchTextFav != ""){
                                    if(username.indexOf(filter) == -1 &&
                                       text.indexOf(filter) == -1 &&
                                       name.indexOf(filter) == -1)
                                    return(<div key={piu.id}></div>);
                                }

                                numberOfVisiblePius += 1;
                                return (
                                    <PiuContainer  key={piu.id} content={piu}/>
                                )
                            })}
                        </S.PiusSection>
                        <S.UnsuccessfulSearchTag>
                            {numberOfVisiblePius == 0
                                ? "Não foi encontrado nenhum piu ou usuário :("
                                : ""}
                        </S.UnsuccessfulSearchTag>
                    </S.FeedContent>
                </S.ContentWrapper>
            </SearchTextContextFav.Provider>
        </>
    );
}

export default Feed;