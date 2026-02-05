import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../app/providers/ThemeProvider/index';
import { MainPage } from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
    <MainPage {...(args as object)} />
);

export const MainPageLight = Template.bind({});
MainPageLight.args = {};
MainPageLight.decorators = [ThemeDecorator(Themes.LIGHT)];

export const MainPageDark = Template.bind({});
MainPageDark.args = {};
MainPageDark.decorators = [ThemeDecorator(Themes.DARK)];
