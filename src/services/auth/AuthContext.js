'use client';
import { createContext, useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from './axios';  // Import the configured Axios instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Admin and User Profile get api.

    useEffect(() => {
        const token = localStorage.getItem('_token');
        const adminToken = localStorage.getItem('admin_token');

        if (token)
        {
            axios.get('/request-user-profile') 
                .then(response => {
                    setUser(response.data);
                    console.log(response.data,"Get user Profile");
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    setLoading(false);
                });
        }
        if(adminToken)
        {
            axios.get('/request-admin-profile') 
                .then(response => {
                    setUser(response.data);
                    console.log(response.data,"Get admin Profile");
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem('admin_token');
                    setLoading(false);
                });
        }
        // else
        // {
        //     setLoading(false);
        // }
    }, []);

    // User register api
    const register = async (full_name, email, password) => {
        try 
        {
            const response = await axios.post('/register', { full_name, email, password })
            const token = response.data.authorization
            localStorage.setItem('_token', token); 
            setUser(response.data.user)
        }
        catch (error)
        {
            const errorMessage = error.response ? error.response.data : 'An error occurred';
            return errorMessage; 
        }
    }

    // User login api
    const login = async (email, password) => {
        try 
        {
            const response = await axios.post('/login', { email, password }); 
            const token = response.data.authorization;
            // navigate('/dashboard');
            localStorage.setItem('_token', token);
            setUser(response.data.user);
        }
        catch (error)
        {
            const errorMessage = error.response ? error.response.data : 'An error occurred';
            return errorMessage; 
        }
    };

     // User login with google api
     const login_with_google = async (email,full_name,password,google_id) => {

        const response = await axios.post('/login-with-google', { email,full_name,password,google_id });
        const token = response.data.authorization.token;
        localStorage.setItem('_token', token);
        setUser(response.data.user);
    };

    // Admin login api
    const admin_login = async (email, password) => {
        try 
        {
            const response = await axios.post('/admin-login', { email, password });
            const token = response.data.authorization;
            // navigate('/dashboard');
            localStorage.setItem('admin_token', token);
            setUser(response.data.user);
        }
        catch(error)
        {
            const errorMessage = error.response ? error.response.data : 'An error occurred';
            console.log("in Error Api",error.response.data)
            return errorMessage; 
        }
    };

    // Admin and User logout api
    const logout = async () => {
        const response = await axios.post('/logout');
        console.log(response,"Check Logout Api");
        localStorage.removeItem('_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register,admin_login,login_with_google }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
