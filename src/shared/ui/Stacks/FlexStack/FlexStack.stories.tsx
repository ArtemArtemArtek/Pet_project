import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../../shared/configs/storybook/ThemeDecorator';
import { Themes } from '../../../../app/providers/ThemeProvider/index';
import { FlexStack } from './FlexStack';
// import '../../../app/styles/index.scss'

export default {
    title: 'shared/Stacks/FlexStack',
    component: FlexStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FlexStack>;

const Template: ComponentStory<typeof FlexStack> = (args) => <FlexStack {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 
    <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>,
};
// Primary.decorators = [ThemeDecorator(Themes.DARK)];


