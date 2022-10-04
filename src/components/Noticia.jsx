import { Card, Button } from "react-bootstrap";

const Noticia = () => {
    return (
        <>
            <aside className="col-12 col-md-4 mt-3 bg-ligth ">
                <Card className="my-2">
                    <Card.Img variant="top" className="altura" src="https://images.ole.com.ar/2022/10/03/KIpggL1zF_320x210__1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        <Button variant="primary">Leer articulo completo</Button>
                    </Card.Body>
                </Card>
            </aside>
        </>
    );
};

export default Noticia;
