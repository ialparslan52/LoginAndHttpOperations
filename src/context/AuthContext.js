import axios from 'axios';
import React, { createContext, useState } from 'react';
import { BASE_URL } from '../config';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext(); // veri aktarımı alımıi taşıma,tek obje vs. -- login

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);



    //// REGISTER
    const register = (name, mail, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/register`, {
            name, 
            mail,
            password,
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        }).catch(e => {
            console.log(`register error: ${e}`);
            setIsLoading(false);
        });
    };
    const login = async (mail, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/login`, {
            username: mail,
            password: password,

        })
            .then(response => {
                let userInfo = response.data;
                console.log(response.data);
                setUserInfo(userInfo)
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    };

    const logout = () => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/logout`, {}, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        }).then(resource => {
            console.log(resource.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
        }).catch(e => {
            console.log(`logout error..: ${e}`);
            setIsLoading(false);

        });
    }


    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            register,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}