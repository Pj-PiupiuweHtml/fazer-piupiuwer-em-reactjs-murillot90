import React, { FormEvent, useState } from 'react';

import * as S from './styles';
import Button from '../../components/Basic/Button';
import Input from '../../components/Basic/Input';

import deadBirdIcon from '../../assets/images/dead-kiwi-bird-solid.svg';
import birdIcon from '../../assets/images/kiwi-bird-solid.svg';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        alert("oi");
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
                    <S.LoginForm onSubmit={handleLogin}>
                        <S.InputArea>
                            <Input 
                                labelText="Username"
                                onChange={(e) => {setUsername(e.target.value)}}
                            />
                            <Input 
                                labelText="Password"
                                onChange={(e) => {setUsername(e.target.value)}}
                            />
                        </S.InputArea>
                        <S.ButtonArea>
                            <Button type="submit" variant="CTA">
                                Log In
                            </Button>

                            <p>Don’t have an account? <a href="/feed">Sign Up here!</a></p>
                        </S.ButtonArea>
                    </S.LoginForm>
                </S.LoginArea>
            </S.Container>
        </S.Background>
    );
}

export default Login;