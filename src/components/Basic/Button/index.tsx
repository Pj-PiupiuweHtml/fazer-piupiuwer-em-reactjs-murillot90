import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant: string,
    iconSrc?: string
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <S.ButtonComponent variant={props.variant}>
            {props.iconSrc && 
                (<img src={props.iconSrc} alt="Ícone"/>)}
            {props.children}
        </S.ButtonComponent>
    );
}

export default Button;
