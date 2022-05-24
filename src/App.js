import './App.css';
import {useState} from "react";

const a = () => {
    console.log("a");
}

const b = () => {
    a();
    console.log("b");
}

const useCounter = () => {
    const [count, setCount] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);

    const setCounter = (args) => {
        const {newCount, newIncrementValue} = args;
        setCount(newCount);
        setIncrementValue(newIncrementValue);
    }

    return [{count, incrementValue}, setCounter];
};


const App = () => {
    const [counter, setCounter] = useCounter();

    b();

    return (
        <div className="counter">
            <header>
                Welcome to debugging React application (Counter)
            </header>
            <section>
                <div className="count">
                    Count: <b>{counter.count}</b>
                </div>
                <div className="actions">
                    <button
                        className="reset"
                        onClick={() => setCounter({newCount: 0, newIncrementValue: 1})}
                    >
                        Reset
                    </button>
                    <button
                        className="increment"
                        onClick={() => setCounter({
                            newCount: counter.count + counter.incrementValue,
                            newIncrementValue: counter.incrementValue
                        })}
                    >
                        Increment
                    </button>
                </div>
            </section>
        </div>
    );
}

export default App;
