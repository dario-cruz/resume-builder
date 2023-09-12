import { useState } from "react";
import resumeData from "./data/resumeData";

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
            <label>
                First Name:
                <input type='text' className='form-input'
                onChange={e => setFname(e.target.value)}/>
            </label>
            <label>
                Last Name:
                <input type='text' className='form-input'
                onChange={e => setLname(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type='email' className='form-input' 
                onChange={e => setEmail(e.target.value)}/>
            </label>




        </form>
    )
}