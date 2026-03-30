import { EnabledFlags } from "../../../../shared/types";
import { jsonSettingsType } from "./jsonSrttings";

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
    jsonSettings?: jsonSettingsType

}

export interface userSchema {
    isAuth?: user;
    init?: boolean;
}
