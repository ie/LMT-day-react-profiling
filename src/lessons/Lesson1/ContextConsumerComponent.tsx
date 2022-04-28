import { useContext } from "react";
import Lesson1Context from "./context";
import RandomGrid from "./RandomGrid";
import "./Component.css"

const ContextComponent = () => {
    const {store} = useContext(Lesson1Context);

    return (<div className="HalfBlock">
        <p>
            Context value of index: {store.index}
        </p>
        <RandomGrid size={10000}>
            <h2>Contextual Grid:</h2>
        </RandomGrid>
    </div>
    )
};

export default ContextComponent;