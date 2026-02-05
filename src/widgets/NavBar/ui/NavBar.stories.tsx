import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { RouterDecorator } from '../../../shared/configs/storybook/RouterDecorator';

import { Themes } from '../../../app/providers/ThemeProvider/index';
import NavBar from './NavBar';
// import '../../../app/styles/index.scss'

export default {
    title: 'widgets/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const LightNavBar = Template.bind({});
LightNavBar.args = {};
LightNavBar.decorators = [ThemeDecorator(Themes.LIGHT), RouterDecorator];

export const DarkNavBar = Template.bind({});
DarkNavBar.args = {};
DarkNavBar.decorators = [ThemeDecorator(Themes.DARK), RouterDecorator];
