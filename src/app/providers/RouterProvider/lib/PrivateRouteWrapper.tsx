import React from "react";
import { Navigate } from "react-router-dom";
import { user } from "../../../../entities/User";

type ProtectedRouteProps = {
    user: user | null;
    children: JSX.Element;
};

export const PrivateRouteWrapper = (props: ProtectedRouteProps) => {


    const { children, user } = props

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
}