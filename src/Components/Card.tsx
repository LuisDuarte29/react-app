import { ReactNode } from "react"
//El interface es la forma en que nosotros queremos que sea el parametro en este caso el props{body}
interface Props {
    children: ReactNode;
}
function Card(props: Props) {
    const { children } = props
    return (
        <div className="card"
            style={{
                width: '350px',

            }} >
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

interface CardBodyProps {
    title: string
    text: string
}
export function CardBody(props: CardBodyProps) {

    return (
        //Esto se pone cuando el html no posee un div
        <>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>


        </>
    );
}
export default Card;