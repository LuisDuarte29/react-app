import { useState } from "react";

type ListProps = {
    data: string[];
}

function List({ data }: ListProps) {
    const [index, setIndex] = useState(1);
    const handClick = (i: number) => {
        setIndex(i);
    }
    return (
        <ul className="list-group">
            {data.map((elemento, i) => (<li key={elemento} onClick={() => { handClick(i) }} 
            className={`list-group-item ${index == i ? "active" : "" }`}>{elemento}</li>)) //Recorro el data con .map y pongo la lista una por una
            }
        </ul>

    )
}
export default List