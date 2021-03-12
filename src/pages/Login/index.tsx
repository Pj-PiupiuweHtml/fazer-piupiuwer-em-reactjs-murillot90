import React, { FormEvent, useState } from 'react';
import { useAuth } from "../../hooks/useAuth"

import * as S from './styles';
import Button from '../../components/Basic/Button';
import Input from '../../components/Basic/Input';

import deadBirdIcon from '../../assets/images/dead-kiwi-bird-solid.svg';
import birdIcon from '../../assets/images/kiwi-bird-solid.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error } = useAuth();

    const sendLoginForm = (e: FormEvent) => {
        e.preventDefault();
        login({ email, password });
    }

    return (
        <S.Background>
            <S.Container>
                <S.Logo>
                    <h1>Piupiuwer</h1>
                    <img src={birdIcon} alt=""/>
                    <h3>The okayish social network</h3>
                </S.Logo>
                <S.LoginArea>
                    <S.LoginHeader>
                        <h1>Log In!</h1>
                        <img src={deadBirdIcon} alt="Pássaro Morto"/>
                    </S.LoginHeader>
                    <S.LoginForm onSubmit={sendLoginForm}>
                        <S.InputArea>
                            <S.WarningText>
                                {error && "Incorrect email or password :("}
                            </S.WarningText>
                            <Input 
                                labelText="Email"
                                onChange={(e) => {setEmail(e.target.value)}}
                                type="text"
                            />
                            <Input 
                                labelText="Password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                type="password"
                            />
                        </S.InputArea>
                        <S.ButtonArea>
                            <Button type="submit" variant="CTA">
                                Log In
                            </Button>
                            <p>Don’t have an account? <a href="#">Sign Up here!</a></p>
                        </S.ButtonArea>
                    </S.LoginForm>
                </S.LoginArea>
            </S.Container>
        </S.Background>
    );
}

export default Login;