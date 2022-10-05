import { Card, Button, Badge } from "react-bootstrap";

const Noticia = ({ news }) => {
    return (
        <>
            <aside className="col-12 col-md-4 mt-3 bg-ligth ">
                <Card className="my-2">
                    <Card.Img variant="top" className="altura" src={news.image_url} />
                    <Card.Body>
                        <Badge>{news.category[0]}</Badge>
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
