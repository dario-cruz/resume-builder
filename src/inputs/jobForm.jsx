import { useState } from 'react'

export default function JobItem() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [jobDetails, setJobDetails] = useState('')

    // Create function to handle the submission of form and push data to object.
    const handleSubmit = (e) => {
        // Prevent the default form behavior. 
        // Stop page from refreshing and loosing user data. 
        e.prevent.default()

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job Title:
                <input type='text' value={jobTitle}></input>
            </label>
        </form>
    )


}