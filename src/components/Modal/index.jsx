import styles from "./Modal.module.css";
import iconClose from "./close.png";
import Formulario from "../Formulario";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Modal() {
  const { videos, videoSeleccionado, setVideoSeleccionado } =
    useContext(GlobalContext);

  return (
    <>
      {videos.map((video, index) => {
        if (videoSeleccionado == video.id) {
          return (
            <div className={styles.overlay} key={index}>
              <dialog
                className={styles.dialog}
                open={!!videoSeleccionado}
                onClose={() => setVideoSeleccionado(null)}
              >
                <div className={styles.divForm}>
                  <h1>EDITAR CARD:</h1>
                  <Formulario video={video} />
                </div>
                <form method="dialog">
                  <button className={styles.btnCerrar}>
                    <img src={iconClose} alt="" />
                  </button>
                </form>
              </dialog>
            </div>
          );
        }
      })}
    </>
  );
}

export default Modal;
