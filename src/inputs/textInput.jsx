import { useState } from "react";

export default function textInput({ title }) {
    const [input, setInput] = useState('')

    return (
        <label>
            {title}
            <textarea
            name={title}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </label>
    )
}