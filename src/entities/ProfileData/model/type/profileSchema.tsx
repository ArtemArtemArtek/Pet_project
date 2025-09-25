import { Currency, Country, Cities } from "../../../../shared/consts/enums";

export interface UserProfile{
    firstname: string,
    lastname: string,
    age: string,
    currency: Currency,
    country: Country,
    city: Cities,
    username: string,
    avatar: string
}

export interface ProfileSchema{
    data?:UserProfile,
    error?: string,
    isLoading: boolean,
    readonly: boolean
}