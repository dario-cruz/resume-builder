export default function NormalButton({ text, type, funcToRun }) {

    return (
        <button type={type} onClick={funcToRun}>
            {text}
        </button>
    )
}