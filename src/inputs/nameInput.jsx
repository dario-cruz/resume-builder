import { useState } from "react";

export default function NameInput({ labelTitle = 'PlaceHolder' }) {
  const [name, setName]= useState('')
  return (
    <label>
      { labelTitle }
      <input
      className="form-input"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </label>
  )
}
