import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../app/providers/ThemeProvider/index';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args as object} />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};
NotFoundPageLight.decorators = [ThemeDecorator(Themes.LIGHT)];

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ThemeDecorator(Themes.DARK)];

