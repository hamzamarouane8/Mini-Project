import React from "react";
import { useLocation, Navigate } from "react-router";
import { Route } from "react-router";
import { useProfile } from "../hooks/userHooks";
import DefaultLayout from '../layouts/default';
import AuthLayout from "../layouts/default/AuthLayout";
import NonAuthLayout from '../layouts/non-auth';

const AuthProtected = (props: any) => {

    const {userProfile , loading}= useProfile();

    if (!userProfile && loading) {
        return (
            <Navigate replace to='/auth-login' />
        );
    }

    return <AuthLayout>{props.component}</AuthLayout>;

};

export const NonAuthProtected = (props: any) => {

    const {userProfile , loading}= useProfile();

    const NestedComponent = props.component;

    if (userProfile) {
        return (
            <Navigate replace to='/dashboard' />
        );
    }
    return <NonAuthLayout component={<NestedComponent />} />;

};


export { AuthProtected };
