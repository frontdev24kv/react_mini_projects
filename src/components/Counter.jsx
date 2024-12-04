import './Counter.css'
import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const onClickIncrease = () => setCount(count + 1);
    const onClickDecrease = () => setCount(count - 1);
    return (
        <div className="container">
            <h1 className="title">Count</h1>
            <p className="show-counter">{count}</p>
            <div className="buttons">
                <button onClick={onClickIncrease} className="increase">
                    +
                </button>
                <button onClick={onClickDecrease} className="decrease">
                    -
                </button>
            </div>
        </div>
    );
}

export default Counter;
