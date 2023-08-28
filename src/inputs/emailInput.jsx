export default function EmailInput({ title, updateFunc}) {
    return(
        <label>
            {title}
            <input
            id='email-input'
            type="email"
            onChange={(e) => updateFunc(e.target.value)}
            />
        </label>
    )
}
