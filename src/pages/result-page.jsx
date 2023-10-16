import resumeData from "../data/resumeData"

function FullName() {
    return (
        <h2 className="result-name">{resumeData.firstName} {resumeData.lastName}</h2>
    )
}

function Email() {
    return (
        <h2 className="result-email">{resumeData.email}</h2>
    )
}


function ResumeElement({elementType, designatedClass, content}) {
    return (
        
    )
}








export default function ResultPage() {
    
    return (
        <>
            <div className="resume-result">

            </div>
        </>
    )
}