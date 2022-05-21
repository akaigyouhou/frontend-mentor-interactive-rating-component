import { useState } from 'react';
import SubmitCard from './SubmitCard';
import ResponseCard from './ResponseCard';

function Card() {
    const [submit, setSubmit] = useState(false);
    const [number, setNumber] = useState("");

    const onsubmit = () => {
        setSubmit(true);
    }

    return (
        <>
            {
                !submit ? 
                <SubmitCard onsubmit={onsubmit} setNumber={setNumber} number={number} /> :
                <ResponseCard number={number}/>
            }
        </>
    );
}

export default Card;