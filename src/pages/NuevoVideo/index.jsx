import styles from "./NuevoVideo.module.css"
import { GlobalContext } from "../../context/GlobalContext"
import { v4 as uuid } from "uuid"
import { useContext } from "react"
import swal from "sweetalert"
import { useForm } from "react-hook-form"
import stylesSelect from "../../components/Formulario/InputSelect.module.css"

function NuevoVideo() {
  const { register, handleSubmit, formState, reset } = useForm()

  const { categorias, generos } = useContext(GlobalContext)

  const onSubmit = async (data) => {
    const { titulo, instrumento, genero, url } = data
    try {
      await fetch("https://fake-iwtwsabc1-ivan-beltrans-projects.vercel.app/videos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: uuid(),
          url,
          titulo,
          instrumento,
          genero
        })
      })
      swal(
        "¡Video agregado",
        "El video se ha resgistrado con exito",
        "success"
      ).then((value) => {
        window.location.href = "/"
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleReset = () => reset()

  return (
    <div className={styles.divMain}>
      <h1>NUEVO VIDEO</h1>
      <h3>Llene el formulario para agregar un nuevo video</h3>
      <div className={styles.divH2}>
        <h2>Crear video</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formNuevoVideo}>
        <label htmlFor="">Titulo</label>
        <input type="text" {...register("titulo", { required: true })} />
        <label htmlFor="">Instrumento</label>
        <select
          {...register("instrumento", { required: true })}
          className={stylesSelect.selectCategoria}
        >
          <option value="">Seleccione un instrumento</option>
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
          <option value="">Seleccione un genero</option>
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
            AÑADIR
          </button>
          <button
            type="button"
            onClick={() => handleReset()}
            className={styles.btnLimpiar}
          >
            LIMPIAR
          </button>
        </div>
      </form>
    </div>
  )
}

export default NuevoVideo
