import { useState } from "react";
import resumeData from "./data/resumeData";
import FormButton from "./page_elements/form-button";

export default function ResumeForm() {
    // Define all of the states that the child components will use. 
    const [email, setEmail] = useState('example@aol.com')
    const [fname, setFname] = useState('John')
    const [lname, setLname] = useState('Smith')
    const [website, setWebsite] = useState('theodinproject.com')
    const [location, setLocation] = useState('Bronx, NY')
    const [phone, setPhone] = useState('555-555-5555')


    // Form submission behaviors. 
    const handleSubmit = (e) => {
        //Prevent the form from refreshing the page and loosing the users state in the application. 
        e.preventDefault()

        // Update resumeData obj with the values the user input. 
        resumeData.email = email
        resumeData.firstName = fname
        resumeData.lastName = lname
        resumeData.website = website
        resumeData.location = location
        resumeData.phone = phone

    }

    return(
        <form id='resume-form' className='resume-form' onSubmit={handleSubmit}>
            <label className='input-label'>
                First Name:
                <input type='text' name='fname' className='form-input'
                value={fname}
                onChange={e => setFname(e.target.value)}/>
            </label>
            <label className='input-label'>
                Last Name:
                <input type='text' name='lname' className='form-input'
                value={lname}
                onChange={e => setLname(e.target.value)}/>
            </label>
            <label className='input-label'>
                Email:
                <input type='email' name='email' className='form-input'
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
            </label>
            <label className='input-label'>
                Website:
                <input type='url' name='website' className='website-input'
                value={website}
                onChange={e => setWebsite(e.target.value)}/>
            </label>
            <label className='input-label'>
                Phone Number:
                <input type='tel' name='phone' className='phone-input'
                value={phone}
                onChange={e => setPhone(e.target.value)}/>
            </label>
            <label>
                Location:
                <input type='text' name='location' className='location-input'
                value={location}
                onChange={e => setLocation(e.target.value)}/>
            </label>
            <FormButton text={"Submit"} formId={'resume-form'} />



        </form>
    )
}