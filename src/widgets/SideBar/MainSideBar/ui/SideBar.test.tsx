import {describe, expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react'
import SideBar from './SideBar';
import { i18nHelper } from '../../../../shared/lib/i18next/i18nHelper';

describe('Sidebar test', ()=>{
    test('Test render', ()=>{
        i18nHelper(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()//Опционально, можно убрать
    })
    test('Test collapsed', ()=>{
        i18nHelper(<SideBar/>)
        const toggleButton = screen.getByTestId('sidebar-button') 
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})