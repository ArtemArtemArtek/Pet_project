import { Currency, Country, Cities } from "../../../../shared/consts/enums";

export interface userProfile{
    firstname: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: Cities,
    username: string,
    avatar: string
}

export interface ProfileSchema{
    data?:userProfile,
    error?: string,
    isLoading: boolean,
    readonly: boolean
}