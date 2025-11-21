import React from "react";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../../widgets/PageWrapper/PageWrapper";

export const AdminPage=()=>{
    
    const {t} = useTranslation()
    
    return(
        <PageWrapper>
            {t('ADMIN PAGE')}
        </PageWrapper>
    )
}