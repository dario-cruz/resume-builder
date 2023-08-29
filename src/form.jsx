import { useState } from "react";
import NameInput from './inputs/nameInput';
import EmailInput from './inputs/emailInput';
import DateInput from './inputs/dateInput';

export default function ResumeForm() {
    // Define all of the states that the child components will use. 
    const [email, setEmail] = useState('example@aol.com')
    const [fname, setFname] = useState('John')
    const [lname, setLname] = useState('Smith')
    const [jobOneDetails, setJobOneDetails] = useState('')
    const [jobTwoDetails, setJobTwoDetails] = useState('')
    const [jobThreeDetails, setJobThreeDetails] = useState('')
    
    // Func for updating email value.
   const updateStates = (fieldName, newValue) => {
        switch(fieldName) {
            case 'email':
                setEmail(newValue)
                console.log(email)
                break
            case 'fname':
                setFname(newValue)
                break
            case 'lname':
                setLname(newValue)
                break
            case 'jobOneDetails':
                setJobOneDetails(newValue)
                break
            case 'jobTwoDetails':
                setJobTwoDetails(newValue)
                break
            case 'jobThreeDetails':
                setJobThreeDetails(newValue)
                break
            default:
                break
        }
   }

    // Form submission behaviors. 
    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()
    }


    return(
        <form id='resume-form' onSubmit={handleSubmit}>
            <NameInput labelTitle="First Name" />
            <NameInput labelTitle="Last Name" />
            <EmailInput title="Email" updateFunc={updateStates}/>
            <DateInput title='Start Date'/>
            <DateInput title='End Date' />
        </form>
    )
}