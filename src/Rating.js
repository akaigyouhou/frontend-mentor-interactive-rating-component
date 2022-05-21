function Rating({setNumber, number}) {
    const numbers = [1, 2, 3, 4, 5];

    const onChose = (index) => {
        setNumber(index);
    }
    return (
        <div id="rating">
        {numbers.map((num, index) => (
            <div
                className={"number" + (index === number ? " active" : "")}
                key={index}
                onClick={() => onChose(index)}
            >{num}</div>
        ))}
        </div>
    );
}

export default Rating;