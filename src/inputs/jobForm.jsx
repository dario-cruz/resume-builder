import { useState } from 'react'
import resumeData from '../data/resumeData'

export default function JobItem() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [jobDetails, setJobDetails] = useState('')

    // Define the current date and then update start and end date. 
    let currentDate = new Date()
    currentDate = currentDate.toISOString
    setStartDate(currentDate)
    setEndDate(currentDate)


    // Create function to handle the submission of form and push data to object.
    const handleSubmit = (e) => {
        // Prevent the default form behavior. 
        // Stop page from refreshing and loosing user data. 
        e.prevent.default()

        // Update the resumeData object with the values from the form. 
        resumeData['job-' + {jobTitle}] = {
            title : {jobTitle},
            startdate : {startDate},
            enddate : {endDate},
            details : {jobDetails}
        }

    }

    return (
        <form className='job-form' onSubmit={handleSubmit}>
            <label>
                Job Title:
                <input 
                type='text' 
                onChange={e => setJobTitle(e.target.value)} 
                value={jobTitle} />
            </label>
            <label>
                Start Date:
                <input 
                type='date'
                onChange={e => setStartDate(e.target.value)}
                value={startDate}    
                />
            </label>
            <label>
                End Date:
                <input 
                type='date'
                onChange={e => setEndDate(e.target.value)}
                value={endDate}
                />
            </label>
            <label>
                <input
                type='textarea'
                onChange={e => setJobDetails(e.target.value)}
                value={jobDetails}
                />
            </label>
        </form>
    )


}