import { useState } from "react";
import useDocumentTitle from "../../useDocumentTitle";
import Lesson1Context from "./context";
import ContextConsumerComponent from "./ContextConsumerComponent";
import NonContextComponent from "./NonContextComponent";

const Lesson1 = () => {
    useDocumentTitle('Lesson 1');
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);

    const handleMouseEnter = () => {
        setCount(count => count + 1);
    };
    
    const handleIndexClick = () => {
        setIndex(index => index + 1);
    };

    return (
        <Lesson1Context.Provider value={{ store: { index } }}>
            <h1>Lesson 1</h1>
            <p>Mouse entered this button: {count}</p>
            <button onClick={handleIndexClick} onMouseEnter={handleMouseEnter}>Next context index</button>
            <hr />
            <ContextConsumerComponent />
            <NonContextComponent />
        </Lesson1Context.Provider>
    );
}

export default Lesson1;