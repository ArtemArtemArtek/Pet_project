import {describe, expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react'
import SideBar from './SideBar';
import { wrapperTest } from '../../../../shared/lib/wrapperTest/wrapperTest';

describe('Sidebar test', ()=>{
    test('Test render', ()=>{
        wrapperTest(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()//Опционально, можно убрать
    })
    test('Test collapsed', ()=>{
        wrapperTest(<SideBar/>)
        const toggleButton = screen.getByTestId('sidebar-button') 
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})