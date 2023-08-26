// import { useState } from "react";
import NameInput from './inputs/nameInput'
import EmailInput from "./inputs/emailInput";
import DateInput from './inputs/dateInput';

export default function ResumeForm() {
    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()
    }

    return(
        <form id='resume-form' onSubmit={handleSubmit}>
            <NameInput labelTitle="First Name" />
            <NameInput labelTitle="Last Name" />
            <EmailInput title="Email" />
            <DateInput title='Start Date'/>
            <DateInput title='End Date' />
        </form>
    )
}