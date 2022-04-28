import RandomCell from "./RandomCell";
import "./RandomGrid.css";

interface Props {
    size: number;
    children?: React.ReactNode
}

const RandomGrid: React.FC<Props> = ({size, children}) => {
    const arr = Array.from({length: size}, (_, i) => i + 1);
    return (
        <>
            {children}
            <div className="RandomGrid">
                {
                    arr.map(i => (
                        <RandomCell key={"cell_" + i} n={i} />
                    ))
                }
            </div>
        </>
    );
}

export default RandomGrid;