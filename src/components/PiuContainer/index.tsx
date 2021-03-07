import React from 'react';
import * as S from './styles';

import likeIcon from '../../assets/images/icons/heart-outline.svg';
import commentIcon from '../../assets/images/icons/comment-outline.svg';
import repiuIcon from '../../assets/images/icons/retweet-solid.svg';
import pinIcon from '../../assets/images/icons/thumbtack-outline.svg';
import editIcon from '../../assets/images/icons/edit-regular.svg';
import deleteIcon from '../../assets/images/icons/trash-alt-regular.svg';

function PiuContainer() {
    return (
        <S.Piu>
            <img src="https://github.com/murillot90.png" alt="Avatar"/>
            <S.PiuContent>
                <S.PiuHeader>
                    <S.UserDetails>
                        <h3>Murillo Teixeira</h3>
                        <p>@murillot90 • 1h</p>
                    </S.UserDetails>
                    <S.EditOptions>
                        <img src={pinIcon} alt="Pin"/>
                        <img src={editIcon} alt="Edit"/>
                        <img src={deleteIcon} alt="Delete"/>
                    </S.EditOptions>
                </S.PiuHeader>
                <S.PiuMessage>Bom dia</S.PiuMessage>
                <S.EditPiuTextarea/>
                <S.PiuFooter>
                    <S.EditPiuInfo>
                        <span>0/140</span>
                        <button>Save</button>
                        <a>Cancel</a>
                        <p>Piu</p>
                    </S.EditPiuInfo>
                    <S.InteractionsArea>
                        <S.Interaction>
                            <img src={likeIcon} alt="Like"/>
                            <p>564</p>
                        </S.Interaction>
                        <S.Interaction>
                            <img src={commentIcon} alt="Comment"/>
                            <p>112</p>
                        </S.Interaction>
                        <S.Interaction>
                            <img src={repiuIcon} alt="Repiu"/>
                            <p>60</p>
                        </S.Interaction>
                    </S.InteractionsArea>
                </S.PiuFooter>
            </S.PiuContent>
        </S.Piu>
    );
}

export default PiuContainer;