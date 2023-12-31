import { useState } from 'react'

export default function DateInput({ title = 'placeholder', updateFunc }) {
    // Get the current date so that we may apply it to the date form. 
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().slice(0, 10)
    const [date, setDate] = useState(formattedDate)
    return (
        <label className='input-label'>
            {title}
            <input className='date-input' type='date' name={title} value={date} min={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </label>
    )
}
