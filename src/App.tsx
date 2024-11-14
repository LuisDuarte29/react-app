import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";
import Buttons from "./Components/Buttons";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<string[]>([]);

  // Función para agregar un "minion" a la lista
  const addMinion = () => setData([...data, "minion"]);

  // Función para eliminar el último elemento de la lista
  const deleteMinion = () => setData(data.slice(0, -1));

  // Función que se ejecuta al seleccionar un elemento
  const handSelect = (elemento:string) => {
    console.log("imprimiendo", elemento);
  };
  let arrayMinimo=[""];
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // URL de ejemplo
      const result = await response.json();
      let arrayTitulos=[""];

      result.forEach(element => {
      
       arrayTitulos.push(element.title)
    
       
      });
      arrayMinimo=arrayTitulos.slice(0,-190)
      console.log(arrayMinimo)
      setData(arrayMinimo);
    

    }
  
    fetchData();
  },[]);
  

  return (
    <Card>
      <Buttons onclickButton={addMinion}>Agregar</Buttons>
      <Buttons onclickButton={deleteMinion}>Eliminar</Buttons>
      <CardBody contador={data.length-1} title="Hola Mundo" text="Este sería un componente" />
      <List data={data} onSelect={handSelect} />
    </Card>
  );
}

export default App;
