import React from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from './AllRoutes';
import { AuthProtected, NonAuthProtected } from './AuthProtected';


export default (props: any) => {

    return (
        <Routes>
            {publicRoutes.map(({ path, component }, idx) => {
                return (
                    <Route
                        path={path}
                        element={<NonAuthProtected component={component} />}
                        key={idx}
                    />
                )
            })}
            {privateRoutes.map(({ path, component }, idx) => {
                const NestedPrivateComponent = component;

                return (
                    <Route
                        path={path}
                        element={
                            <AuthProtected component={<NestedPrivateComponent />} />
                        }
                        key={idx}
                    />
                )
            })}

        </Routes>
    );
}
