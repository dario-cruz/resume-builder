export default function NameInput({ labelTitle, updateFunc, isFirstName = false }) {
  
  return (
    <label className='input-label'>
      { labelTitle }
      <input
      className="name-input"
      type="text"
      onChange={(e) => isFirstName ? updateFunc('fname', e.target.value) : updateFunc('lname', e.target.value)}
      />
    </label>
  )
}
