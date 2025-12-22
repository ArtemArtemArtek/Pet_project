import React, { useCallback, useState } from "react";
import { RaitingStars } from "../../../shared/ui/RaitingStars/RaitingStars";
import { VStack, HStack } from "../../../shared/ui/Stacks";
import { Input } from "../../../shared/ui/Input/Input";
import Modal from "../../../shared/ui/Modal/Modal";
import { Button, ButtonSize, ButtonTheme } from "../../../shared/ui/Button/Button";
import cls from './Rating.module.scss'

interface RatingProps{
    title: string
    feedbackText?:string
    onSelectStar: (star: number, feedback?:string)=>void
    selectedStars?:number
}

export const Rating:React.FC<RatingProps> =(props)=>{
    
    const {title, onSelectStar, selectedStars} = props

    const [modalOpen, setModalOpen]=useState<boolean>(false)
    const [rating, setRating]=useState<number>()
    const [feedback, setfeedback]=useState<string>('')
    
    // const setOpenModal =()=>{
    //     setModalOpen(!modalOpen)
    // } 

    const closeButton=()=>{
        onSelectStar(rating)
        setModalOpen(!modalOpen)
    }
    
    const sendButton=()=>{
        onSelectStar(rating, feedback)
        setModalOpen(!modalOpen)
    }

    const selectStar = useCallback((star)=>{
        setRating(star)
        setModalOpen(!modalOpen)
        // onSelectStar(star)
    },[modalOpen])

    return(
        <div className={cls.Card_Wrapper}>
            <VStack allignItem="center" justifyContent="center" gap="16">
            <h1>{selectedStars?'Спасибо за отзыв!':title}</h1>
            <RaitingStars onSelect={selectStar} selectedStars={selectedStars}/>
            <Modal opened={modalOpen} setOpen={()=>setModalOpen(!modalOpen)} >
                <VStack>
                <h1>Оставьте свой отзыв</h1>
                <Input onChange={(event)=>setfeedback(event.currentTarget.value)}/>
                <HStack justifyContent="end">
                <Button onClick={closeButton} size={ButtonSize.SIZE_M} theme={ButtonTheme.OUTLINE_RED}>
                    Закрыть
                </Button>
                <Button onClick={sendButton} size={ButtonSize.SIZE_M} theme={ButtonTheme.OUTLINE}>
                    Отправить
                </Button>
                </HStack>
                </VStack>
            </Modal>
            </VStack>
        </div>
    )
}