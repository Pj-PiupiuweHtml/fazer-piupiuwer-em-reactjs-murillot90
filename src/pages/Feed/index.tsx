import React, { useState, useEffect, FormEvent, useRef } from 'react';
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
    const { user, token } = useAuth();
    
    const [piuArray, setPiuArray] = useState<Array<Piu>>([] as Array<Piu>);
    const [piuToPostLength, setPiuToPostLenght] = useState(0);
    const [piuToPostText, setPiuToPostText] = useState('');
    const [piuToPostError, setPiuToPostError] = useState('');

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
    }

    useEffect(() => {
        loadPius();
        console.log(piuArray);
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
            const response = await api.post('/pius', {text: piuToPostText}, {
                    headers: { Authorization: `Bearer ${token}`}, 
                })
            setPiuToPostError('');
        } catch {
            alert("Tente favoritar novamente mais tarde!");
        }
        setPiuToPostText('');
        loadPius();
    }

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
                    <S.PiusSection>
                        {piuArray.map(piu => {
                            return (
                                <PiuContainer  key={piu.id} content={piu}/>
                            )
                        })}
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