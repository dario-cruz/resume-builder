import { useState } from "react";

export default function JobDetails({ title, updateFunc}) {
    const [input, setInput] = useState('')

    return (
        <label>
            {title}

            <textarea
            name={title}
            value={input}
            onChange={(e) => updateFunc('jobOneDetails', e.target.value)}
            />

        </label>
    )
}