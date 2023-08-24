import { useState } from "react";

const [email, setEmail] = useState('')

function EmailInput({ title }) {
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

export default {EmailInput, email}

