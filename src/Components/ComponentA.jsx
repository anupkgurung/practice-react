import { useState } from "react";
import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export const ComponentA = () => {
    const [counter, setCounter] = useState(0)
    //const handle = ()=>setCounter(counter => counter+1)
    return (
        <>
            <div><b>i am the at {counter} counter</b></div>
            <ComponentB setCounter={setCounter}/>
            <ComponentC setCounter={setCounter}/>
        </>
    )
}