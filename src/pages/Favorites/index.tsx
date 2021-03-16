import React, { useState, useEffect, FormEvent, useRef, createContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth"
import axios from 'axios';
import api from '../../services/api';
import Loader from "react-loader-spinner";

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';
import PiuContainer from '../../components/PiuContainer';

import { User, Piu, PiuLike } from '../../services/entities';

import * as S from './styles';

import piarIcon from '../../assets/images/icons/feather-solid-white.svg';
import userEvent from '@testing-library/user-event';
import { COLORS } from '../../assets/styles/themes';

export const SearchTextContextFav = createContext({
    setSearchTextFav: (text: string) => {}
});

function Feed() {
    const { user } = useAuth();
    
    const [loading, setLoading] = useState(true);
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
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
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
                    { loading &&
                            (<S.LoaderWrapper>
                                <Loader
                                    type="Oval"
                                    color={COLORS.secondaryDark}
                                    height={48}
                                    width={48}
                                />
                            </S.LoaderWrapper>)}
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
                            {numberOfVisiblePius == 0 && !loading
                                ? "Ou vc n tem favorito, ou tá rolando um bug louco no código, mano, recarrega a página aí pra ver se vai (UX 10/10)"
                                : ""}
                        </S.UnsuccessfulSearchTag>
                    </S.FeedContent>
                </S.ContentWrapper>
            </SearchTextContextFav.Provider>
        </>
    );
}

export default Feed;