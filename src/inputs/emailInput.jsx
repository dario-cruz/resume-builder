import { useState } from "react";

export default function EmailInput({ inputTitle }) {
    const [email, setEmail] = useState('')
    return(
        <label>
            {inputTitle}
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
    )
}