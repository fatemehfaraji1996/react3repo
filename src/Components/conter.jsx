import React, { useState } from "react"

const [count,setcount]=useState("pp")
function Count() {
    function add() {
       setcount +1
    }
    return(
        <>
    <p>moro</p>
    <button onClick={add}>add</button>
    <button>reset</button>
    <button>mines</button>

    </>
)
}
export default Count