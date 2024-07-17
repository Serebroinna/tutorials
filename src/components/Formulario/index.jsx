import { useContext } from "react";
import styles from "./Formulario.module.css";
import InputForm from "../InputForm";
import InputSelect from "../InputSelect";
import { GlobalContext } from "../../context/GlobalContext";
import swal from "sweetalert";

function Formulario(props) {
  const { video } = props;
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
    setDeleteVideo,
  } = useContext(GlobalContext);

  console.log(video);

  const manejarEnvioForm = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          url,
          titulo,
          instrumento,
          genero,
        }),
      }).then(() => setDeleteVideo(true));
      swal(
        "¡Cambios guardados!",
        "El video se ha editado correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={manejarEnvioForm} className={styles.form}>
      <InputForm label="Titulo" type="text" setValor={setTitulo} />
      <InputSelect
        label="Instrumento"
        opciones={categorias}
        setValor={setInstrumento}
      />
      <InputSelect label="Genero" opciones={generos} setValor={setGenero} />
      <InputForm label="URL" type="url" setValor={setUrl} />
      <div className={styles.divBotones}>
        <button type="submit" className={styles.btnGuardar}>
          GUARDAR
        </button>
        <button type="button" className={styles.btnLimpiar}>
          LIMPIAR
        </button>
      </div>
    </form>
  );
}

export default Formulario;
