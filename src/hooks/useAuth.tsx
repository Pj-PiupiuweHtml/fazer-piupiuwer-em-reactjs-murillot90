import React, 
        { createContext, 
            useState, 
            useContext,
            useEffect} from 'react';

import { User } from '../services/entities';
import api from '../services/api';

interface LoginCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    token: string;
    error: boolean;
    login(loginCred: LoginCredentials): void;
    logout(): void;
}

interface AuthState {
    user: User;
    token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [error, setError] = useState(false);

    const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Piupiuwer:token');
        const user = localStorage.getItem('@Piupiuwer:user');

        if (user && token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            return { user: JSON.parse(user), token };
        }

        return {} as AuthState;
    });

    useEffect(() => {
        const getUser = async () => {
            const response = await api.get('users?username=' + userData.user.username)
            // console.log(response.data);
            setUserData({user: response.data[0], token: userData.token});
        }
        userData?.user?.username && getUser()
    }, [userData?.user?.username])

	const login = async ({ email, password }: LoginCredentials) => {
        try {
            const response = await api.post('/sessions/login/', {
                email,
                password,
            });
    
            const { token, user } = response.data;
            localStorage.setItem('@Piupiuwer:token', token);
            localStorage.setItem('@Piupiuwer:user', JSON.stringify(user));
    
            setUserData({ user, token });
            setError(false);
        } catch {
            setError(true);
        }
    };

    const logout = () => {
        localStorage.removeItem('@Piupiuwer:token');
        localStorage.removeItem('@Piupiuwer:user');
        setUserData({} as AuthState);
    }

    return (
        <AuthContext.Provider 
            value={{
                ...(userData || {}),
                error: error,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    ) 
}

export function useAuth(): AuthContextData { 
    return useContext(AuthContext);
}