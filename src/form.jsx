import { useState } from "react";
import NameInput from './inputs/nameInput'

export default function ResumeForm( ) {
    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <NameInput labelTitle="Name" />
        </form>
    )
}