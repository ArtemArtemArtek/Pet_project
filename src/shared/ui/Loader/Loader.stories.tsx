import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../app/providers/ThemeProvider/index';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [ThemeDecorator(Themes.LIGHT)];

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(Themes.DARK)];
