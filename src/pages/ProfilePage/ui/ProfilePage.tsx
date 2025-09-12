import React from "react";
import { useTranslation } from "react-i18next";

interface ProfilePageProps{
    data?: string
}
const ProfilePage:React.FC<ProfilePageProps>=(props)=>{
    const {t} = useTranslation('profile')
    return(
        <div>
            {t('Страница профиля')}
        </div>
    )
}

export default ProfilePage