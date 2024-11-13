import { useState } from "react";

type ListProps = {
    data: string[];
    onSelect?: (elemento:string)=> void;
}

function List({ data,onSelect }: ListProps) {
    const [index, setIndex] = useState(-1);
    const handClick = (i: number,elemento:string) => {
        setIndex(i);
        onSelect?.(elemento);
    }
    return (
        <ul className="list-group">
            {data.map((elemento, i) => (<li key={elemento} onClick={() => { handClick(i,elemento) }} 
            className={`list-group-item ${index == i ? "active" : "" }`}>{elemento}</li>)) //Recorro el data con .map y pongo la lista una por una
            }
        </ul>

    )
}
export default List