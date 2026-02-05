import React from 'react';
import { FlexStack, FlexStackProps } from '../FlexStack/FlexStack';

type HStackProps = Omit<FlexStackProps, 'flexDirection'>;

export const HStack: React.FC<HStackProps> = (props) => {
    const { children } = props;

    return (
        <FlexStack
            {...props}
            flexDirection="row">
            {children}
        </FlexStack>
    );
};
