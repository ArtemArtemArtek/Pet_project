import React from "react";
import cls from './Avatar.module.scss'


export enum AvatarSize{
    SMALL = '30px',
    MEDIUM = '200px',
    BIG = '350px'
}

interface AvatarProps{
    src: string
    size: AvatarSize
    bordered?:boolean
    onClick?:()=>void
}

export const Avatar:React.FC<AvatarProps>=(props)=>{
    const {size, src, bordered = false, onClick=null} = props

    return(    
        <img onClick={onClick} src={src} style={{
            width: size,
            height: size,
            borderRadius: '50%',
            border: bordered?'solid 3px var(--inverted-bg-color)': null
            
        }}/>
    )
}