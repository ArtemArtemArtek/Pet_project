import { EnabledFlags } from "../../../../shared/types";

export enum UserRoles {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface user {
    id: number;
    username: string;
    avatar?: string;
    role?: UserRoles;
    enabledFlags?:EnabledFlags
}

export interface userSchema {
    isAuth?: user;
    init?: boolean;
}
