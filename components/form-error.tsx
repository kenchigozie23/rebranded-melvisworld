import React from 'react'
import { MdWarning } from "react-icons/md";


interface FormErrorProps{
    message?: string;
}

export const FormError = ({
    message
}: FormErrorProps) => {
    if(!message) return null;
    return(
        <div className='bg-red-300 p-3 rounded-md flex item-center gap-x-3 text-sm text-red-700 '>
            <MdWarning className='h-5 w-5'/>
            <p>{message}</p>
        </div>
    )
}
