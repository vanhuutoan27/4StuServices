import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    
    console.log("The function Counter is called")

    return <div> {count} <button onClick={(event) => setCount(count + 1)}> Click Me To Pass</button></div>
};
