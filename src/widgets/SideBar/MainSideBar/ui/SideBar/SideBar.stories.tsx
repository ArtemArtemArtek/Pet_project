import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../../../shared/configs/storybook/ThemeDecorator';
import { StyleDecorator } from '../../../../../shared/configs/storybook/StyleDecorator';

import { Themes } from '../../../../../app/providers/ThemeProvider/index';
import SideBar from './SideBar';

export default {
    title: 'widgets/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const LightSideBar = Template.bind({});
LightSideBar.args = {};
LightSideBar.decorators = [ThemeDecorator(Themes.LIGHT), StyleDecorator];


export const DarkSideBar = Template.bind({});
DarkSideBar.args = {};
DarkSideBar.decorators = [ThemeDecorator(Themes.DARK), StyleDecorator];


