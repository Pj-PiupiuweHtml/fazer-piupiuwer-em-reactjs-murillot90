import React,  { useState, useEffect } from 'react';
import moment from 'moment';

import * as S from './styles';
import { Piu, PiuLike, User } from "../../services/entities"
import { useAuth } from "../../hooks/useAuth"
import api from '../../services/api';

import likeIcon from '../../assets/images/icons/heart-outline.svg';
import likeFilledIcon from '../../assets/images/icons/heart-solid-red.svg';
import favIcon from '../../assets/images/icons/star-outline.svg';
import favFilledYellowIcon from '../../assets/images/icons/star-solid-yellow.svg';
import deleteIcon from '../../assets/images/icons/trash-alt-regular.svg';
import unknownAvatar from '../../assets/images/unknown-avatar.png';

interface PiuContainerProps {
    content: Piu,
}

const PiuContainer: React.FC<PiuContainerProps> = ( { content }) => {
    const { user, token, setGetUserAgain } = useAuth();
    
    const [likes, setLikes] = useState<number>(0);
    const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);
    const [alreadyFavorited, setAlreadyFavorited] = useState<boolean>(false);
    const [piuInDeleteAnimation, setPiuInDeleteAnimation] = useState<boolean>(false);
    const [piuIsVisible, setPiuIsVisible] = useState<boolean>(true);
    
    var data = {
        'piu_id' : content.id
    }

    const likePiu = async () => {
        alreadyLiked ? setAlreadyLiked(false) : setAlreadyLiked(true)
        alreadyLiked ? setLikes(likes - 1) : setLikes(likes + 1)
        try {
            const response = await api.post('/pius/like', data, {
                    headers: { Authorization: `Bearer ${token}`}, 
            })
        } catch {
            alert("Tente dar like novamente mais tarde!");
        }
    }
    
    const favoritePiu = async () => {
        alreadyFavorited ? setAlreadyFavorited(false) : setAlreadyFavorited(true);
        try {
            const endpoint = alreadyFavorited ? '/pius/unfavorite' : '/pius/favorite';
            console.log(endpoint);
            const response = await api.post(endpoint, data, {
                headers: { Authorization: `Bearer ${token}`}, 
            })
            setGetUserAgain(c => !c); //'c' é o valor atual do estado. Mesmo que fazer setGetUserAgain(!getUserAgain)
        } catch {
            alert("Tente favoritar novamente mais tarde!");
        }
    }

    const deletePiu = async () => {
        try {
            const response = await api.delete('/pius', {
                data: {
                    "piu_id": content.id
                }
            });
            setPiuInDeleteAnimation(true);
            setTimeout(() => {
                setPiuIsVisible(false);
            }, 500);
        } catch {
            alert("Tente novamente mais tarde!");
        }
    }

    useEffect(() => {
        setLikes(content.likes.length);
        content.likes.map(like => {
            (like.user.id === user.id 
                 && setAlreadyLiked(true))
        });

        user.favorites.map(piu => {
            (piu.id === content.id
                && (setAlreadyFavorited(true)))
        });

    }, [user.favorites])

    if(!piuIsVisible) return(<></>);

    return (
        <S.Piu 
            className={
                (alreadyFavorited
                    ? " fixed"
                    : "")
                + 
                (piuInDeleteAnimation
                    ? " fadeout"
                    : "")
            }
        >
            <S.ProfilePicture>
                <img src={content.user.photo === "" 
                            ?  unknownAvatar 
                            : content.user.photo} alt="Avatar"/>    
            </S.ProfilePicture>
            <S.PiuContent>
                <S.PiuHeader>
                    <S.UserDetails>
                        <h3>{content.user.first_name + " " + content.user.last_name}</h3>
                        <p>{"@" + content.user.username} · {moment(content.created_at).fromNow()}</p>
                    </S.UserDetails>
                        <S.EditOptions>
                            {user.id === content.user.id && (
                                <img 
                                    onClick={() => deletePiu()}
                                    src={deleteIcon} 
                                    alt="Delete"/>
                                )}
                        </S.EditOptions>
                </S.PiuHeader>
                <S.PiuMessage>{content.text}</S.PiuMessage>
                <S.PiuFooter>
                    <S.InteractionsArea>
                        <S.Interaction>
                            <img 
                                onClick={() => favoritePiu()}
                                src={alreadyFavorited
                                        ? favFilledYellowIcon
                                        : favIcon
                                    } 
                                alt="Pin"/>
                        </S.Interaction>
                        <S.Interaction>
                            <img 
                                onClick={() => likePiu()} 
                                src={alreadyLiked
                                        ? likeFilledIcon
                                        : likeIcon
                                    } 
                                alt="Like"/>
                            <a>{likes + " likes"}</a>
                        </S.Interaction>
                    </S.InteractionsArea>
                </S.PiuFooter>
            </S.PiuContent>
        </S.Piu>
    );
}

export default PiuContainer;