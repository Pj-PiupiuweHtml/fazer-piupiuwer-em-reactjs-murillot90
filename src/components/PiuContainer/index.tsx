import React,  { useState, useEffect } from 'react';
import * as S from './styles';
import { Piu, PiuLike, User } from "../../services/entities"
import { useAuth } from "../../hooks/useAuth"
import api from '../../services/api';

import likeIcon from '../../assets/images/icons/heart-outline.svg';
import likeFilledIcon from '../../assets/images/icons/heart-solid-red.svg';

import commentIcon from '../../assets/images/icons/comment-outline.svg';
import repiuIcon from '../../assets/images/icons/retweet-solid.svg';
import pinIcon from '../../assets/images/icons/thumbtack-outline.svg';
import pinFilledIcon from '../../assets/images/icons/thumbtack-solid.svg';
import editIcon from '../../assets/images/icons/edit-regular.svg';
import deleteIcon from '../../assets/images/icons/trash-alt-regular.svg';
import unknownAvatar from '../../assets/images/unknown-avatar.png';

interface PiuContainerProps {
    content: Piu,
}

const PiuContainer: React.FC<PiuContainerProps> = ( { content }) => {
    const { user, token } = useAuth();
    
    const [likes, setLikes] = useState<number>(0);
    const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);
    // const [userFavorites, setUserFavorites] = useState<Array<PiuLike>>([] as Array<PiuLike>);
    const [alreadyFavorited, setAlreadyFavorited] = useState<boolean>(false);
    const [piuVisibility, setPiuVisibility] = useState<boolean>(true);
    

    var data = {
        'piu_id' : content.id
    }

    const likePiu = async () => {
        try {
            const response = await api.post('/pius/like', data, {
                    headers: { Authorization: `Bearer ${token}`}, 
            })
            response.data.operation == "like" ? setLikes(likes + 1) : setLikes(likes - 1)
            alreadyLiked ? setAlreadyLiked(false) : setAlreadyLiked(true);
        } catch {
            alert("Tente dar like novamente mais tarde!");
        }
    }

    const favoritePiu = async () => {
        try {
            const endpoint = alreadyFavorited ? '/pius/unfavorite' : '/pius/favorite';
            console.log(endpoint);
            const response = await api.post(endpoint, data, {
                headers: { Authorization: `Bearer ${token}`}, 
            })
            alreadyFavorited ? setAlreadyFavorited(false) : setAlreadyFavorited(true);
        } catch {
            alert("Tente favoritar novamente mais tarde!");
        }
    }

    const deletePiu = async () => {
        try {
            const response = await api.delete('/pius', {
                headers: { 
                    Authorization: `Bearer ${token}`
                },  
                data: {
                    "piu_id": content.id
                }
            });
            setPiuVisibility(false);
        } catch {
            alert("Tente novamente mais tarde!");
        }
    }

    // const getFavorites = async () => {
    //     try {
    //         const response = api.get('/users/?username=' + user.username, {
    //             headers: { Authorization: `Bearer ${token}`}, 
    //         }).then(function(response){
    //             setUserFavorites(response.data[0].favorites);

    //         });            
    //     } catch {
    //         alert("Tente novamente mais tarde!");
    //     }
    // }

    useEffect(() => {
        setLikes(content.likes.length);
        content.likes.map(like => {
            (like.user.id === user.id 
                && setAlreadyLiked(true))
        });
        // userFavorites.map(piu => {
        //     console.log(piu);
        //     (piu.id === content.id
        //         && (setAlreadyFavorited(true)))
        // });
    }, [])

    if(!piuVisibility) return(<></>);

    return (
        <S.Piu 
            className={
                alreadyFavorited
                    ? "fixed"
                    : ""
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
                        <p>{"@" + content.user.username} • 1h</p>
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
                                        ? pinFilledIcon
                                        : pinIcon
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