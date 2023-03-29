import { Container } from "react-bootstrap";



export default () => {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Cuentanos en que te podemos ayudar</h1>
      <p>Correo: </p>
      <input type="text" className="form-control" />
      <p>Descripcion:</p>
      <textarea class="form-control"></textarea>
      <button type="button" className="btn btn-danger mt-3">Enviar</button>
      
    </Container>
  );
};
