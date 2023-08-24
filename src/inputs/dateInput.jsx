import { useState } from 'react'

function DateInput({ title }) {
    const [date, setDate] = useState('')
    // Get the current date so that we may apply it to the date form. 
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().slice(0, 10)
    
    return (
        <label>
            {title}
            <input type='date' name={title} value={formattedDate} min={formattedDate} />
        </label>
    )
}