import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../app/providers/ThemeProvider/index';
import { AboutPage } from './AboutPage';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'pages/AboutPage',
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
    <AboutPage {...(args as object)} />
);

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [ThemeDecorator(Themes.LIGHT)];

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Themes.DARK)];
