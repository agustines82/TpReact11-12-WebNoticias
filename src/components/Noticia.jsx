import { Card, Button, Badge } from "react-bootstrap";

const Noticia = ({ news }) => {
    return (
        <>
            <aside className="col-12 col-md-4 bg-ligth ">
                <Card className="my-1">
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body>
                        <h4>
                            <Badge bg="secondary">{news.category[0]}</Badge>
                        </h4>
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
