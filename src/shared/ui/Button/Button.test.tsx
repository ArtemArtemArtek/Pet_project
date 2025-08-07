import {describe, expect, test} from '@jest/globals';
import {render, screen, waitFor} from '@testing-library/react'
import { Button, ButtonTheme } from './Button';

describe('Button test', ()=>{
    test('Test render', ()=>{
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
        screen.debug()
    })
    test('Test with theme', ()=>{
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})