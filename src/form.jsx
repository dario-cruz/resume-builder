import { useState } from "react";
import NameInput from './inputs/nameInput'
import EmailInput from "./inputs/emailInput";
import DateInput from './inputs/dateInput';

export default function ResumeForm() {
    // Define all of the states that the child components will use. 
    const [email, setEmail] = useState('example@aol.com')
    const [fname, setFname] = useState('John')
    const [lname, setLname] = useState('Smith')

    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()
    }

    // Func for updating email value.
    const updateEmailValue =  (value) => {
        setEmail(value)
    }

    return(
        <form id='resume-form' onSubmit={handleSubmit}>
            <NameInput labelTitle="First Name" />
            <NameInput labelTitle="Last Name" />
            <EmailInput title="Email" updateFunc={updateEmailValue}/>
            <DateInput title='Start Date'/>
            <DateInput title='End Date' />
        </form>
    )
}