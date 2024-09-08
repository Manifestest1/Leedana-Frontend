import React from 'react';

// Login and Register pages
const ChooseLogin = React.lazy(() => import('./views/pages/login/ChooseLogin'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const AdminLogin = React.lazy(() => import('./views/pages/login/AdminLogin'));
const Register = React.lazy(() => import('./views/pages/register/Register')); 

// Forget password and Reset password pages
const CheckEmail = React.lazy(() => import('./views/pages/forgetPassword/CheckEmail'));
const CreatePassword = React.lazy(() => import('./views/pages/forgetPassword/CreatePassword'));
const PasswordReset = React.lazy(() => import('./views/pages/forgetPassword/PasswordReset'));

const routes = [
    // Login and Register path
    { path: '/', name: 'ChooseLogin', element: <ChooseLogin/> },
    { path: '/login', name: 'Login', element: <Login/> },
    { path: '/admin-login', name: 'AdminLogin', element: <AdminLogin/> },
    { path: '/register', name: 'Register', element: <Register/> },

    // Forget password and Reset password path
    { path: '/check-email', name: 'CheckEmail', element: <CheckEmail /> },
    { path: '/create-password', name: 'CreatePassword', element: <CreatePassword /> },
    { path: '/password-reset', name: 'PasswordReset', element: <PasswordReset/> },
];

export default routes;