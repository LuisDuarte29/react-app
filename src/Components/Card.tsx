import { ReactNode } from "react"
//El interface es la forma en que nosotros queremos que sea el parametro en este caso el props{body}
interface Props {
    children: ReactNode;
}
function Card(props: Props) {
    const { children } = props
    return (
        <div className="card" >
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

interface CardBodyProps {
    title: string
    text: string
    contador:number
}
export function CardBody(props: CardBodyProps) {
    console.log("Este es el contado: " + props.contador);
    return (
        //Esto se pone cuando el html no posee un div
        <>
        <div className="row text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <p className="card-text">{props.contador}</p>
            </div>

        </>
    );
}
export default Card;