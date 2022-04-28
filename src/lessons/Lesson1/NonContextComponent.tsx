import RandomGrid from "./RandomGrid";
import "./Component.css"

const NonContextComponent = () => {
    return (<div className="HalfBlock">
        <p>
            Non contextual component
        </p>
        <RandomGrid size={1000}>
            <h2>Non contextual Grid:</h2>
        </RandomGrid>
    </div>
    )
};

export default NonContextComponent;