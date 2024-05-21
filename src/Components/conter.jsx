import { useState } from "react";

function Count() {

    const [count, setCount] = useState(0);
    function add() {
        setCount(count +1)
    }
    function reset(params) {
        setCount(0)
    }
    function mines(params) {
        setCount(count - 1)
    }
    return(
        <>
    <p>{count}</p>
    <button onClick={add}>add</button>
    <button onClick={reset}>reset</button>
    <button onClick={mines}>mines</button>

    </>
)
}
export default Count