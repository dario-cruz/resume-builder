import JobItem from "./inputs/jobForm"
import { useState } from 'react'

export default function ModalElement() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // Return modal that takes ad=vantage of sematic html.
        <dialog className='job-modal'>
            <JobItem />
        </dialog>
    )
}