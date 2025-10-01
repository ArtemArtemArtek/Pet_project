import React from "react";
import { UserProfile } from "../../type/profileSchema";
import { validateErrorEnum } from "../../type/profileSchema";
import { Currency, Cities, Country } from "../../../../../shared/consts/enums";

export const validateProfileData = (userData: UserProfile): validateErrorEnum => {
    const { age, avatar, city, country, currency, firstname, lastname, username } = userData
    console.log('UserData:'+userData.age)

    const regex = /^\d+$/;

    const Errors: validateErrorEnum = {}


    console.log(userData)
    
    if (!regex.test(age)) {
        Errors.ageError = '*Введите цифры в строку возраста'
    } else {
        if (parseInt(age) > 100 || parseInt(age) < 0) {
            Errors.ageError = '*Некорректный диапазон возраста'
        }
    }

    if (age.length === 0) {
        Errors.ageError = '*Заполните поле возраста'
    }
    if (avatar.length === 0) {
        Errors.avatarError = '*Заполните поле аватара'
    }
    if (city.length === 0) {
        Errors.cityError = '*Заполните поле города'
    }
    if (country.length === 0) {
        Errors.countryError = '*Заполните поле страны'
    }
    if (currency.length === 0) {
        Errors.currencyError = '*Заполните поле валюты'
    }
    if (firstname.length === 0) {
        Errors.firstNameError = '*Заполните поле имени'
    }
    if (lastname.length === 0) {
        Errors.lastNameError = '*Заполните поле фамилии'
    }
    if (username.length === 0) {
        Errors.userNameError = '*Заполните поле логина'
    }

    if (!Object.values(Cities).includes(city)) {
        Errors.cityError = '*Отсутствует город в списке'
    }

    if (!Object.values(Country).includes(country)) {
        Errors.countryError = '*Отсутствует страна в списке'
    }

    if (!Object.values(Currency).includes(currency)) {
        Errors.currencyError = '*Отсутствует валюта в списке'
    }

    return Errors
}