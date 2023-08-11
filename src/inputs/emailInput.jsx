import { useState } from "react";

export default function EmailInput({ title }) {
    const [email, setEmail] = useState('')
    return(
        <label>
            {title}
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
    )
}