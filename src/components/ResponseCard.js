import Illustration from './illustration-thank-you.svg';

function ResponseCard({number}) {
    return (
        <div class="card center">
            <img src={Illustration} alt="thank"></img>
            <div className="chose">You selected {number} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to
            get in touch!
            </p>
        </div>
    )
}

export default ResponseCard;