import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./Formulario.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import swal from "sweetalert";
import stylesSelect from "./InputSelect.module.css";
import axios from "axios";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      titulo: props.video.titulo,
      instrumento: props.video.instrumento,
      genero: props.video.genero,
      url: props.video.url,
    });
  }, []);

  const { video } = props;
  const { setDeleteVideo, categorias, generos, setVideoSeleccionado } =
    useContext(GlobalContext);

  const onSubmit = async (data) => {
    const { titulo, instrumento, genero, url } = data;
    try {
      setDeleteVideo(true);
      await axios.put(
        `https://my-json-server.typicode.com/Serebroinna/tutorials-api/videos/${video.id}`,
        {
          url,
          titulo,
          instrumento,
          genero,
        },
        {
          headers: { "Content-type": "application/json" },
        }
      );
      /*  await fetch(`https://my-json-server.typicode.com/Serebroinna/tutorials-api/videos/${video.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          url,
          titulo,
          instrumento,
          genero
        })
      }) */
      swal(
        "¡Cambios guardados!",
        "El video se ha editado correctamente",
        "success"
      );
      setDeleteVideo(false);
      setVideoSeleccionado(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="">Titulo</label>
      <input type="text" {...register("titulo", { required: true })} />
      <label htmlFor="">Instrumento</label>
      <select
        {...register("instrumento", { required: true })}
        className={stylesSelect.selectCategoria}
      >
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.instrumento}>
            {categoria.instrumento}
          </option>
        ))}
      </select>
      <label htmlFor="">Genero</label>
      <select
        {...register("genero", { required: true })}
        className={stylesSelect.selectCategoria}
      >
        {generos.map((genero) => (
          <option key={genero.id} value={genero.genero}>
            {genero.genero}
          </option>
        ))}
      </select>
      <label htmlFor="">URL</label>
      <input type="text" {...register("url", { required: true })} />
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
