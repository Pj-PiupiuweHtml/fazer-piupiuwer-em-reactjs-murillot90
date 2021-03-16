import React, { useState, useEffect, FormEvent, useRef, createContext } from 'react';
import Loader from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth"
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';
import PiuContainer from '../../components/PiuContainer';

import { Piu } from '../../services/entities';

import * as S from './styles';

import piarIcon from '../../assets/images/icons/feather-solid-white.svg';
import { COLORS } from '../../assets/styles/themes';

export const SearchTextContext = createContext({
    setSearchText: (text: string) => {}
});

function Feed() {
    const { user, token } = useAuth();
    
    const [piuArray, setPiuArray] = useState<Array<Piu>>([] as Array<Piu>);
    const [piuToPostLength, setPiuToPostLenght] = useState(0);
    const [piuToPostText, setPiuToPostText] = useState('');
    const [piuToPostError, setPiuToPostError] = useState('');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    let numberOfVisiblePius = 0;
    
    const piuInputRef = useRef(null as any);


    const loadPius = async () => {
        try {
            const response = await api.get('/pius/', {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            setPiuArray(response.data);
        } catch {
            alert("Tente carregar pius novamente mais tarde!")
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        loadPius();
    }, [])

    const handlePiar = async (e: FormEvent) => {
        e.preventDefault();
        
        if (piuToPostText.trim().length == 0) {
            setPiuToPostError("Empty piu :(");
            return;
        }
        if (piuToPostText.trim().length > 140) {
            setPiuToPostError("Too long :(");
            return;
        }
        try {
            const response = await api.post('/pius', {text: piuToPostText.trim()})
            setPiuToPostError('');
        } catch {
            alert("Tente favoritar novamente mais tarde!");
        }
        setPiuToPostText('');
        loadPius();
    }

    return (
        <>
            <SearchTextContext.Provider value={{setSearchText}}>
                <PageHeader/>
                <S.ContentWrapper>
                    <SidebarMenu/>
                    <SidebarMenuCollapsed/>
                    <S.FeedContent>
                        <S.PiarInputArea>
                            <img src={user.photo} alt="Avatar"/>
                            <S.PiarInput>
                                <form onSubmit={handlePiar}>
                                    <textarea 
                                        onChange={(e) => {
                                            setPiuToPostLenght(e.target.textLength)
                                            setPiuToPostText(e.target.value)
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handlePiar(e);
                                                
                                            }
                                        }}
                                        value={piuToPostText}
                                        ref={piuInputRef}
                                        placeholder="Dê um piu!">
                                    </textarea>
                                    
                                    <S.PiarInputWarning>{piuToPostError}</S.PiarInputWarning>
                                    <S.PiarInputFooter>
                                        <span
                                            className={
                                                piuToPostLength > 140 
                                                ? "warning" 
                                                : ""
                                            }
                                            >{piuToPostLength}/140</span>
                                        <button type="submit" onClick={() => piuInputRef.current.focus()}>
                                            <img src={piarIcon} alt="Profile"/>
                                            Piar    
                                        </button>
                                    
                                    </S.PiarInputFooter>
                                </form>
                            </S.PiarInput>
                        </S.PiarInputArea>
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
                                const filter = searchText.toUpperCase().trim();
                                const username = piu.user.username.toUpperCase();
                                const text = piu.text.toUpperCase();
                                const name = (piu.user.first_name + " " + piu.user.last_name).toUpperCase()

                                if(searchText != ""){
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
                                ? "Não foi encontrado nenhum piu ou usuário :("
                                : ""}
                        </S.UnsuccessfulSearchTag>
                    </S.FeedContent>
                </S.ContentWrapper>
            </SearchTextContext.Provider>
        </>
    );
}

export default Feed;