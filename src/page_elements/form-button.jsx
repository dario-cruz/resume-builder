export default function FormButton({ text, formId }) {

    return (
        <button type='submit' className='form-button' form={formId}>
            {text}
        </button>
    )
}