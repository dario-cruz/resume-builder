export default function EmailInput({ title, updateFunc}) {
    return(
        <label className='input-label'>
            {title}
            <input
            className= 'email-input'
            id='email-input'
            type="email"
            onChange={(e) => updateFunc('email', e.target.value)}
            />
        </label>
    )
}
