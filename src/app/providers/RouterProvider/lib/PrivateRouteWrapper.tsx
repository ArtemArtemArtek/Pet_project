import React from 'react';
import { Navigate } from 'react-router-dom';
import { user } from '../../../../entities/User';
import { UserRoles } from '../../../../entities/User/model/type/userSchema';

type ProtectedRouteProps = {
    user: user | null;
    children: JSX.Element;
    isAdmin?: boolean;
};

export const PrivateRouteWrapper = (props: ProtectedRouteProps) => {
    const { children, user, isAdmin = false } = props;

    if (!user) {
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    if (
        isAdmin &&
        !user.role.includes(UserRoles.ADMIN) &&
        !user.role.includes(UserRoles.MANAGER)
    ) {
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    return children;
};
