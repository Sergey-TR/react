import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {

    const user = true;

    return user ?
        (
            // <Routes>
                privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )
                //<Navigate to={'/chat'}/>
            // </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )}
                <Navigate to={'login'}/>
            </Routes>
        )
};

export default AppRouter;