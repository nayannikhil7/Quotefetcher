import { useState, useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setname] = useState("");
    //anytime the component re renders use state wala function runs
    // useEffect(function myEffect() {
    //     console.log("sjdfhijdfui");
    // }, [name, count]);

    //by doing this ,this will only run once or upr wale se sirf jo function diya h tabhi hoga
    useEffect(function myEffect() {
        console.log("sjdfhijdfui");
    }, []);
    const handlechange = (e) => {
        setname(e.target.value)
    }
    const increment = () => {
        setCount((c) => (c + 1));
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={reset}>reset</button>
            <p>name:{name}</p>
            <input value={name} onChange={handlechange} type="text" />
        </div>
    )
}