import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const nombres = ["Luis", "Marcos", "Alberto"]

  return <Card>
    <CardBody title="Hola Mundo" text="Este seria un componente">
    </CardBody>
    <List data={nombres}></List>
  </Card>

}

export default App;