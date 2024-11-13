import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
const [indexButton,setIndexButton]=useState(false);
const handClickButton= ()=>(setIndexButton(!indexButton))

  const nombres :string[] = []
const handSelect= (elemento:string)=>{
  console.log("imprimiendo",elemento)
}
  return <Card>
    <CardBody title="Hola Mundo" text="Este seria un componente">
    </CardBody>
{nombres.length !==0 ?  <List data={nombres} onSelect={handSelect}></List> : 'No hay un listado de nombres'}
<Buttons indexButtonProps={indexButton} onclickButton={handClickButton}>Hola mundo</Buttons>
  </Card>

}

export default App;