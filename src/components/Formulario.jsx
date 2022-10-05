import ListaNoticias from "./ListaNoticias";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Formulario = ({ noticias }) => {
    //para filtrar las noticias por categoria: (lamentablemente la API solo me devuelve 10 noticias de las cuales casi todas son categoria top (mas leidas) por lo que en el proyecto no se podrà apreciar mucho èsta funcionabilidad)
    const news = noticias;
    const [noticiasFiltradas, setNoticiasFiltradas] = useState(news);

    //console.log(noticiasFiltradas);

    const handleChangePais = (e) => {
        const noticiasXPais = noticiasFiltradas.filter((item) => item.country[0] === e.target.value);
        setNoticiasFiltradas(noticiasXPais);
    };
    const handleChangeCategoria = (e) => {
        const noticiasXCategoria = noticiasFiltradas.filter((item) => item.category[0] === e.target.value);
        setNoticiasFiltradas(noticiasXCategoria);
    };

    return (
        <>
            <Form className="container border rounded py-3 ">
                <Form.Group as={Row} className="justify-content-center" controlId="Form.ControlInput2">
                    <Col sm="2">
                        <Form.Label sm="2" className="lead fs-5">
                            Buscar por paìs
                        </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Select sm="4" aria-label="Default select" name="categoria" onChange={handleChangePais}>
                            <option value="">Seleccione una opción...</option>
                            <option value="argentina">Argentina</option>
                            <option value="mexico">Mexico</option>
                            <option value="colombia">Colombia</option>
                            <option value="brazil">Brazil</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="justify-content-center mt-2" controlId="Form.ControlInput2">
                    <Col sm="2">
                        <Form.Label sm="2" className="lead fs-5">
                            Buscar por categoria
                        </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Select sm="4" aria-label="Default select" name="categoria" onChange={handleChangeCategoria}>
                            <option value="">Seleccione una opción...</option>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="environment">Medio Ambiente</option>
                            <option value="food">Comida</option>
                            <option value="health">Salud</option>
                            <option value="politics">Politica</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnología</option>
                            <option value="top">Mas leídas</option>
                            <option value="world">Mundo</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            <ListaNoticias noticiasFiltradas={noticiasFiltradas} />
        </>
    );
};

export default Formulario;
