import React, { useState, useEffect, createContext } from 'react';
import { useAuth } from "../../hooks/useAuth"
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import Loader from "react-loader-spinner";

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';
import PiuContainer from '../../components/PiuContainer';

import { Piu } from '../../services/entities';

import * as S from './styles';

import { COLORS } from '../../assets/styles/themes';

interface SearchTextProps { 
    setSearchTextFav: React.Dispatch<React.SetStateAction<string>> 
}

export const SearchTextContextFav = createContext<SearchTextProps>({} as SearchTextProps);

let favArray: string[] = []; // tirei do componente para melhorar performance

const Favorites: React.FC= () => {
    const { user } = useAuth();
    
    const [loading, setLoading] = useState(true);
    const [piuArray, setPiuArray] = useState<Piu[]>([]);
    const [searchTextFav, setSearchTextFav] = useState('');    


    useEffect(() => {
        setLoading(true);
        favArray = user.favorites.map(favorite => favorite.id);

        const loadFavorites = async () => {
            try {
                const response: AxiosResponse<Piu[]> = await api.get('/pius/')
                setPiuArray(response.data.filter(piu => favArray.includes(piu.id)))
            } catch {
                alert("Tente carregar pius novamente mais tarde!")
            }
            setLoading(false);
        }

        loadFavorites();
    }, [user.favorites])


    return (
        <>
            <SearchTextContextFav.Provider value={{setSearchTextFav}}>
                <PageHeader/>
                <S.ContentWrapper>
                    <SidebarMenu/>
                    <SidebarMenuCollapsed/>
                    <S.FeedContent>
                    { loading &&
                        <S.LoaderWrapper>
                            <Loader
                                type="Oval"
                                color={COLORS.secondaryDark}
                                height={48}
                                width={48}
                            />
                        </S.LoaderWrapper>
                    }
                        <S.PiusSection>
                            {piuArray.map(piu => {
                                const filter = searchTextFav.toUpperCase().trim();
                                const username = piu.user.username.toUpperCase();
                                const text = piu.text.toUpperCase();
                                const name = (piu.user.first_name + " " + piu.user.last_name).toUpperCase()

                                if(searchTextFav != ""){
                                    if(!username.includes(filter) &&
                                       !text.includes(filter) &&
                                       !name.includes(filter))
                                    return <></>
                                }

                                return  <PiuContainer  key={piu.id} content={piu}/>
                            })}
                        </S.PiusSection>
                        <S.UnsuccessfulSearchTag>
                            {piuArray.length === 0 && !loading
                                ? "Ou vc n tem favorito, ou tá rolando um bug louco no código, mano, recarrega a página aí pra ver se vai (UX 10/10)"
                                : ""}
                        </S.UnsuccessfulSearchTag>
                    </S.FeedContent>
                </S.ContentWrapper>
            </SearchTextContextFav.Provider>
        </>
    );
}

export default Favorites;