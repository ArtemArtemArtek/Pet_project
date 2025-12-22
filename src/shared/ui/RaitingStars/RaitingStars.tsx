import React, { useState } from "react";
import cls from './RaitingStars.module.scss'
import Star from '../../assets/icons/Star.svg'
import ClassNameHelper from "../../../shared/lib/classNames/classNames";

export interface RaitingStarsProps {
    onSelect: (starNumber: number) => void
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const RaitingStars: React.FC<RaitingStarsProps> = React.memo((props) => {

    const { onSelect: onSelectStar, selectedStars = 0 } = props

    const [isHovered, setisHovered] = useState(selectedStars)
    const [isSelected, setisSelected] = useState(selectedStars ? true : false)

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setisHovered(starNumber)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setisHovered(0)
        }
    }

    const onSelect = (starNumber: number) => () => {
        if (!isSelected) {
            setisHovered(starNumber)
            onSelectStar(starNumber)
            setisSelected(true)
        }
    }

    return (
        <div>
            {stars.map((currentStar, index) => (
                <Star
                    onMouseEnter={onHover(currentStar)}
                    onMouseLeave={onLeave}
                    onClick={onSelect(currentStar)}
                    key={index}
                    className={ClassNameHelper(cls.icon_wrapper, { [cls.isSelected]: isSelected }, [isHovered >= currentStar ? cls.icon_selected : cls.icon_not_selected]
                    )} />
            )
            )}
        </div>
    )
})