import { useState } from 'react'
import React from 'react'

export default function DateInput({ title = 'placeholder' }) {
    // Get the current date so that we may apply it to the date form. 
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().slice(0, 10)
    const [date, setDate] = useState(formattedDate)
    return (
        <label>
            {title}
            <input type='date' name={title} value={date} min={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </label>
    )
}
