import "./RandomCell.css";

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}

const RandomCell = ({n}: {n: number}) => {
    return (
        <div className="RandomCell" style={{ backgroundColor: getRandomColor() }}>
            {n}
        </div>
    )
}

export default RandomCell;