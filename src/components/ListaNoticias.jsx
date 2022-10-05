import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
    return (
        <div>
            <div>
                <section className="container border rounded">
                    <article className="container row justify-content-center align-items-center">
                        {noticias.map((elemento, posicion) => (
                            <Noticia key={posicion} news={elemento} />
                        ))}
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ListaNoticias;
