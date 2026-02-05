import { describe, expect, test } from '@jest/globals';
import { Cities, Country, Currency } from '../../../../../shared/consts/enums';
import { UserProfile } from '../../type/profileSchema';
import { validateProfileData } from './validateProfileData';

const mockUserProfile: UserProfile = {
    age: '21',
    avatar: 'testUrl',
    city: Cities.Habarovsk,
    country: Country.Belarus,
    currency: Currency.RUB,
    firstname: 'Slid',
    lastname: 'Basisov',
    username: 'Aboba',
};

describe('Validate profile errors', () => {
    test('Empty errors', () => {
        expect(validateProfileData(mockUserProfile)).toEqual({});
    });
    test('Firstname and lastname errors', () => {
        expect(
            validateProfileData({
                ...mockUserProfile,
                firstname: '',
                lastname: '',
            }),
        ).toEqual({
            firstNameError: '*Заполните поле имени',
            lastNameError: '*Заполните поле фамилии',
        });
    });
    test('Empty age', () => {
        expect(validateProfileData({ ...mockUserProfile, age: '' })).toEqual({
            ageError: '*Заполните поле возраста',
        });
    });
    test('Age more max range', () => {
        expect(
            validateProfileData({ ...mockUserProfile, age: '20000' }),
        ).toEqual({ ageError: '*Некорректный диапазон возраста' });
    });
    test('Age less min range', () => {
        expect(validateProfileData({ ...mockUserProfile, age: '-1' })).toEqual({
            ageError: '*Введите цифры в строку возраста',
        });
    });
    test('Age equal null', () => {
        expect(validateProfileData({ ...mockUserProfile, age: '0' })).toEqual({
            ageError: '*Некорректный диапазон возраста',
        });
    });
    test('City, country, currency', () => {
        expect(
            //@ts-ignore
            validateProfileData({...mockUserProfile, country: '', city: '', currency: '',}),
        ).toEqual({
            cityError: '*Отсутствует город в списке',
            countryError: '*Отсутствует страна в списке',
            currencyError: '*Отсутствует валюта в списке',
        });
    });
    test('Empty avatar area', () => {
        expect(validateProfileData({ ...mockUserProfile, avatar: '' })).toEqual(
            { avatarError: '*Заполните поле аватара' },
        );
    });
});
