import React from 'react';
import { Navigate } from 'react-router';
import { ConsultIcon, DashbordIcon } from '../assets/icons/';


const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Accounts = React.lazy(() => import('../pages/Accounts'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

interface RouteProps {
    path: string;
    component: any;
    exact?: boolean;
    icon?: any;
    text?: string;
}

const publicRoutes: Array<RouteProps> = [
    { path: '/auth-login', component: Login },
    { path: '/home', component: Home },

];

const privateRoutes: Array<RouteProps> = [
    { path: '/dashboard', component: Dashboard , icon: <DashbordIcon />, text:'Dashboard'},
    { path: '/consult', component: Accounts ,  icon: <ConsultIcon /> , text:'Consulting' },
    { path: "/", exact: true, component: Dashboard  },


]

export { publicRoutes, privateRoutes };