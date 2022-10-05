import { Card, Button } from "react-bootstrap";

const Noticia = ({ news }) => {
    return (
        <>
            <aside className="col-12 col-md-4 bg-ligth ">
                <Card className="my-1">
                    <Card.Img variant="top" src={news.urlToImage} />
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>{news.description}</Card.Text>
                        <Button variant="primary">Leer articulo completo</Button>
                    </Card.Body>
                </Card>
            </aside>
        </>
    );
};

export default Noticia;
