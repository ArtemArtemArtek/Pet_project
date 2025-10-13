import React from "react";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import SendMessage from '../../../shared/assets/icons/SendMessage.svg'

export const AddComment:React.FC=()=>{
    return(
        <div>
            <input />
            <Button theme={ButtonTheme.CLEAR}>
                <SendMessage/>
            </Button>
        </div>
    )
}