import Noticia from "./Noticia";

const ListaNoticias = () => {
    return (
        <div>
            <div>
                <section className="container border rounded">
                    <article className="container row justify-content-center align-items-center">
                        <Noticia />
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ListaNoticias;
