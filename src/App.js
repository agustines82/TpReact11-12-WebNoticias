import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
    const [noticias, setNoticias] = useState([]);

    //ciclo de vida
    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_1194917cb6234758575287c9a2bd1e16ecbd9");
            const dato = await respuesta.json();
            //si quisiera filtrar las noticias que tengan imagen null (no lo hago por que me quedo sin noticias...)
            //const datoFiltrado = dato.results.filter((item) => item.image_url !== null);
            //setNoticias(datoFiltrado);
            setNoticias(dato.results);
        } catch (error) {
            //cartel de error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el servidor",
                footer: "Intenta entrar en unos minutos",
            });
        }
    };
    return (
        <main>
            <Titulo />
            <Formulario noticias={noticias} />
        </main>
    );
}

export default App;
