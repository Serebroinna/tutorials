import styles from "./NuevoVideo.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import InputForm from "../../components/InputForm";
import InputSelect from "../../components/InputSelect";
import swal from 'sweetalert';


function NuevoVideo() {
  const {
    generos,
    categorias,
    titulo,
    instrumento,
    genero,
    url,
    setTitulo,
    setInstrumento,
    setGenero,
    setUrl,
  } = useContext(GlobalContext);

  const addVideo = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: uuid(),
        url,
        titulo,
        instrumento,
        genero,
      }),
    });
    swal("¡Video agregado", "El video se ha resgistrado con exito", "success").then(value => {window.location.href = "/"; })
  };

  return (
    <div className={styles.divMain}>
      <h1>NUEVO VIDEO</h1>
      <h3>Llene el formulario para agregar un nuevo video</h3>
      <div className={styles.divH2}>
        <h2>Crear video</h2>
      </div>
      <form onSubmit={addVideo} className={styles.formNuevoVideo}>
        <InputForm label="Titulo" type="text" setValor={setTitulo} />
        <InputSelect
          label="Instrumento"
          opciones={categorias}
          setValor={setInstrumento}
        />
        <InputSelect label="Genero" opciones={generos} setValor={setGenero} />
        <InputForm label="URL" type="url" setValor={setUrl} />
        <div className={styles.divBotones}>
            <button type="submit" className={styles.btnGuardar}>AÑADIR</button>
            <button type="button" className={styles.btnLimpiar}>LIMPIAR</button>
      </div>
      </form>
    </div>
  );
}

export default NuevoVideo;
