import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/configs/storybook/ThemeDecorator';
import { RouterDecorator } from '../../../shared/configs/storybook/RouterDecorator';


import { Themes } from '../../../app/providers/ThemeProvider/index';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args:{
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkLight = Template.bind({});
AppLinkLight.args = { children: 'Пример ссылки' };
AppLinkLight.decorators = [ThemeDecorator(Themes.LIGHT), RouterDecorator];

export const AppLinkDark = Template.bind({});
AppLinkDark.args = { children: 'Пример ссылки' };
AppLinkDark.decorators = [ThemeDecorator(Themes.DARK), RouterDecorator];

