import { useState } from "react";

export default function FirstName() {
    const [name, setName]= useState('')
    return (
      <>
        <label>
            First Name:
            <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
      </>  
    )
}
