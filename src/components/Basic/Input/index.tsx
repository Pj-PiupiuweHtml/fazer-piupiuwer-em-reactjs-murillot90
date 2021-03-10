import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    labelText: string,
}

const Input: React.FC<InputProps> = ({labelText, ...rest}) => {
    return (
        <S.Container>
            <S.InputComponent>
                <input type="text" name={labelText} required {...rest}/>
                <label htmlFor={labelText}>
                    <span>{labelText}</span>
                </label>
            </S.InputComponent>
        </S.Container>
    );
}

export default Input;
