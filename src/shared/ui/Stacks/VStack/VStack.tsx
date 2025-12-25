import React from "react";
import { FlexStack, FlexStackProps } from "../FlexStack/FlexStack";

type VStackProps = Omit<FlexStackProps,"flexDirection">

export const VStack:React.FC<VStackProps>=(props)=>{

    const {children} = props

    return(
        <FlexStack {...props} flexDirection="column">
            {children}
        </FlexStack>
    )
}