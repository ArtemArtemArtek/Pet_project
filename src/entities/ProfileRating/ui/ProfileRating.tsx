import React from "react";
import { useGetProfileRating, usePostProfileRating } from "../model/service/profileRatingEndpoints";
import { Skeleton } from "../../../shared/ui/Skeleton";
import { Rating } from "../../../features/Rating";

interface ProfileRatingProps {
    profileID: string
    userID: number
}

export const ProfileRating: React.FC<ProfileRatingProps> = (props) => {

    const { profileID, userID } = props

    const { isLoading, data } = useGetProfileRating({ profileID: profileID, userID: userID.toString() })
    const [rateProfile] = usePostProfileRating()

    const onSelectProfileStar = (rating: number, feedback?: string) => {
        rateProfile({
            profileID: profileID,
            userID: userID.toString(),
            rating: rating,
            feedback: feedback ?? null
        })
    }

    if (isLoading) {
        return (
            <Skeleton />
        )
    }

    return (
        <div style={{width: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <Rating  onSelectStar={onSelectProfileStar} title='Оцените профиль пользователя' selectedStars={data[0]?.rating}/>
        </div>
    )
}