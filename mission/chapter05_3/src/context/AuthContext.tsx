
import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { useLocalsStorage } from '../hooks/useLocalsStorage';
import { LOCAL_STORAGE_KEY } from '../constants/key';
import { postLogout, postSignin } from '../apis/auth';
import { RequestSigninDto } from '../../types/auth';
import { axiosInstance } from '../apis/axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    accessToken : string | null;
    refreshToken : string | null;
    login : (signInData : RequestSigninDto) => Promise<void>;
    logout : () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType> ({
    accessToken : null,
    refreshToken : null,
    login : async() => {},
    logout : async() => {},
})

export const AuthProvider = ({children} : PropsWithChildren) => {
    const {
        getItem : getAccessTokenFromStorage, 
        setItem : setAccessTokenInStorage, 
        removeItem : removeAccessTokenFromStorage
    } = useLocalsStorage(LOCAL_STORAGE_KEY.accessToken);

    const {
        getItem : getRefreshTokenFromStorage, 
        setItem : setRefreshTokenInStorage, 
        removeItem : removeRefreshTokenFromStorage
    } = useLocalsStorage(LOCAL_STORAGE_KEY.refreshToken);

    const [accessToken, setAccessToken] = useState<string | null>(
        getAccessTokenFromStorage(),
    );

    const [refreshToken, setRefreshToken] = useState<string | null>(
        getRefreshTokenFromStorage(),
    );

    const login = async (signinData : RequestSigninDto) => {
        try {
            const {data} = await postSignin(signinData);

            if (data) {
                const newAccessToken : string = data.accessToken;
                const newRefreshToken : string = data.refreshToken;

                setAccessTokenInStorage(newAccessToken);
                setRefreshTokenInStorage(newRefreshToken);

                setAccessToken(newAccessToken);
                setRefreshToken(newRefreshToken);
                alert("로그인 성공");
                window.location.href = "/my";
            }
        }

        catch (error) {
            console.error("로그인 오류", error);
            alert("로그인 실패");
            window.location.href = "/";
        }
    };

    const logout = async () => {
        try {
            await postLogout();
            removeAccessTokenFromStorage();
            removeRefreshTokenFromStorage();

            setAccessToken(null);
            setRefreshToken(null);

            alert("로그아웃 성공");
        }

        catch (error) { 
            console.error("로그아웃 오류", error);
            alert("로그아웃 실패");
        }
    };

    return (
        <AuthContext.Provider value = {{accessToken, refreshToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error ("AuthContext 를 찾을 수 없습니다.");
    }

    return context;
}
