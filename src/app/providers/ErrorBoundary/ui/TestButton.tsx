import React, {useState, useEffect} from "react";

export const TestButton:React.FC=()=>{
    
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(error){
            throw new Error()
        }
    }, [error])

    const ErrorCall=()=>{
        setError(true)
    }
    return(
        // eslint-disable-next-line i18next/no-literal-string
        <button onClick={ErrorCall}>Вызвать ошибку</button>
    )
}