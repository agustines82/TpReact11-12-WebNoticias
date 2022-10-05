import ListaNoticias from "./ListaNoticias";
import { Form, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
    const [noticias, setNoticias] = useState([]);
    const [pais, setPais] = useState("ar");
    const [categoria, setCategoria] = useState("sports");

    //ciclo de vida
    useEffect(() => {
        consultarAPI().then((respuestaListaNoticias) => {
            setNoticias(respuestaListaNoticias);
        });
    });

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(
                `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=1f4a2b6df0ee4f7a86ee0caba83ad58b`
            );
            const listNews = await respuesta.json();

            return listNews.articles;
        } catch (error) {
            //cartel de error
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el servidor",
                footer: "Intenta entrar en unos minutos",
            });
            return false;
        }
    };
    //console.log(noticiasFiltradas);

    const handleChangePais = (e) => {
        const paisSeleccionado = e.target.value;
        setPais(paisSeleccionado);
        consultarAPI();
    };
    const handleChangeCategoria = (e) => {
        const categoriaSeleccionada = e.target.value;
        setCategoria(categoriaSeleccionada);
        consultarAPI();
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
                            <option value="ar">Argentina</option>
                            <option value="mx">Mexico</option>
                            <option value="co">Colombia</option>
                            <option value="br">Brazil</option>
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
                            <option value="general">Medio Ambiente</option>
                            <option value="health">Salud</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnología</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            <ListaNoticias noticias={noticias} />
        </>
    );
};

export default Formulario;
