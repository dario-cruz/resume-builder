export default function NameInput({ labelTitle, updateFunc, isFirstName = false }) {
  
  return (
    <label>
      { labelTitle }
      <input
      className="form-input"
      type="text"
      onChange={(e) => isFirstName ? updateFunc('fname', e.target.value) : updateFunc('lname', e.target.value)}
      />
    </label>
  )
}
