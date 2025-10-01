import { getProfileData } from './getProfileData';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { Cities, Country, Currency } from '../../../../shared/consts/enums';

const testingState: DeepPartial<StateSchema> = {
    profile:{
        data:{
            age:'70',
            avatar:'https://grizly.club/uploads/posts/2023-08/1693294873_grizly-club-p-kartinki-avatarki-dlya-ds-bez-fona-22.jpg',
            city: Cities.Habarovsk,
            country: Country.Belarus,
            currency: Currency.EUR,
            firstname: 'Blabla',
            lastname:'Bulbul',
            username: 'Bombino'
        },
        error: '',
        isLoading: false,
    }
}

describe('selectProfileData test', () => {
    test('Get auth', () => {
        expect(getProfileData(testingState as StateSchema)).toEqual({
        data:{
            age:'70',
            avatar:'https://grizly.club/uploads/posts/2023-08/1693294873_grizly-club-p-kartinki-avatarki-dlya-ds-bez-fona-22.jpg',
            city: Cities.Habarovsk,
            country: Country.Belarus,
            currency: Currency.EUR,
            firstname: 'Blabla',
            lastname:'Bulbul',
            username: 'Bombino'
        },
        error: '',
        isLoading: false,
    })
    })
    test('Get profile with empty data', () => {
        const testingState: DeepPartial<StateSchema> = {}
        expect(getProfileData(testingState as StateSchema)).toBe(undefined)
    })
})
