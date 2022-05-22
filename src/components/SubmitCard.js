import Rating from './Rating';
import Star from './icon-star.svg';

function SubmitCard({onsubmit, setNumber, number}) {

    return (
        <div className="card">
            <div id="star">
                <img src={Star} alt="star"></img>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support
             request. All feedback is appreciated to help us
              improve our offering!
            </p>
            <Rating setNumber={setNumber} number={number}></Rating>
            <button onClick={onsubmit}>SUBMIT</button>
        </div>
    )
}

export default SubmitCard;