import ListaNoticias from "./ListaNoticias";
import { Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
    return (
        <>
            <Form className="container border rounded py-3 ">
                <Form.Group as={Row} className="justify-content-center" controlId="Form.ControlInput2">
                    <Form.Label column sm="2" className="lead">
                        Buscar por categoria
                    </Form.Label>
                    <Col sm="8">
                        <Form.Select column sm="4" aria-label="Default select" name="categoria">
                            <option value="">Seleccione una opción...</option>
                            <option value="1">Negocios</option>
                            <option value="2">Entretenimiento</option>
                            <option value="3">Medio Ambiente</option>
                            <option value="4">Comida</option>
                            <option value="5">Salud</option>
                            <option value="6">Politica</option>
                            <option value="7">Ciencia</option>
                            <option value="8">Deportes</option>
                            <option value="9">Tecnología</option>
                            <option value="10">Mas leídas</option>
                            <option value="11">Mundo</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            <ListaNoticias />
        </>
    );
};

export default Formulario;
