import { useState } from "react";
import React from "react";

export default function EmailInput({ title = 'placeholder' }) {
    const [email, setEmail] = useState('')
    return(
        <label>
            {title}
            <input
            id='email-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
    )
}
