import ClassNameHelper from "./classNames";
import {describe, expect, test} from '@jest/globals';

describe('ClassNamrHelper', ()=>{
    test('Default value', ()=>{
        const expected='someClass'
        expect(ClassNameHelper('someClass', {}, [])).toBe(expected)
    })
    test('Default value with mode', ()=>{
        const expected='someClass scrolable'
        expect(ClassNameHelper('someClass', {scrolable: true}, [])).toBe(expected)
    })
    test('Default value with attributes', ()=>{
        const expected='someClass some attribute'
        expect(ClassNameHelper('someClass', {}, ['some attribute'])).toBe(expected)
    })
    test('Default value with mode and attributes', ()=>{
        const expected='someClass scrolable some attribute'
        expect(ClassNameHelper('someClass', {scrolable: true}, ['some attribute'])).toBe(expected)
    })
    test('Default value with many mods', ()=>{
        const expected='someClass hideble editeble'
        expect(ClassNameHelper('someClass', {scrolable: false, hideble: true, pointeble: false, editeble: true}, [])).toBe(expected)
    })
    test('Default value with many mods and attributes', ()=>{
        const expected='someClass hideble editeble some at1 some at2'
        expect(ClassNameHelper('someClass', {scrolable: false, hideble: true, pointeble: false, editeble: true}, ['some at1', 'some at2'])).toBe(expected)
    })
    test('Default value with mods undefined', ()=>{
        const expected='someClass hideble'
        expect(ClassNameHelper('someClass', {scrolable: false, hideble: true, pointeble: undefined}, [])).toBe(expected)
    })
})