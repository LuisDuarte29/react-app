function Titulo() {
  const nombre = "Hola soy"
  if (nombre) {
    return <h1>Hola {nombre}</h1>
  }
  return <h1>Hola mundo</h1>
}
export default Titulo