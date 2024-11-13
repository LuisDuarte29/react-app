import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {

const [data, setData]=useState(["Luis","Enrique","Alberto"])
const addMinion=()=>(setData([...data,'minion']))
const deleteMinion=()=>(setData(data.slice(0,-1)))
const handSelect= (elemento:string)=>{
  console.log("imprimiendo",elemento)
}
  return <Card>
        <Buttons onclickButton={addMinion}>Agregar</Buttons>
        <Buttons onclickButton={deleteMinion}>Eliminar</Buttons>
    <CardBody title="Hola Mundo" text="Este seria un componente">
    </CardBody>

<List data={data}  onSelect={handSelect}></List>

  </Card>

}

export default App;