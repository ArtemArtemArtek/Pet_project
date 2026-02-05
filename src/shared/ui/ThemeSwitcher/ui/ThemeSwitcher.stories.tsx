import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../../app/providers/ThemeProvider/index';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};
ThemeSwitcherLight.decorators = [ThemeDecorator(Themes.LIGHT)];

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [ThemeDecorator(Themes.DARK)];
