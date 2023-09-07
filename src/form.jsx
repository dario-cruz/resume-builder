import { useState } from "react";
import resumeData from "./data/resumeData";
import NameInput from './inputs/nameInput';
import EmailInput from './inputs/emailInput';
import DateInput from './inputs/dateInput';

export default function ResumeForm() {
    // Define all of the states that the child components will use. 
    const [email, setEmail] = useState('example@aol.com')
    const [fname, setFname] = useState('John')
    const [lname, setLname] = useState('Smith')
    const [website, setWebsite] = useState('theodinproject.com')
    const [location, setLocation] = useState('Bronx, NY')


    // Form submission behaviors. 
    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()

        // Update resumeData obj with the values the user input. 
        resumeData.email = email
        resumeData.firstname = fname
        resumeData.lastname = lname
        resumeData.website = website
        resumeData.location = location
        
    }

    return(
        <form id='resume-form' onSubmit={handleSubmit}>
            {/* <NameInput labelTitle="First Name" updateFunc={updateStates} isFirstName = 'true' /> */}
            {/* <NameInput labelTitle="Last Name" updateFunc={updateStates} isFirstName = 'false'/> */}
            {/* <EmailInput title="Email" updateFunc={updateStates}/> */}
            {/* <DateInput title='Start Date' updateFunc={updateStates}/> */}
            {/* <DateInput title='End Date' updateFunc={updateStates}/> */}
        </form>
    )
}