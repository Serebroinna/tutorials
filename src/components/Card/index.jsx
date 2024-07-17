import iconDelete from "./delete.png";
import iconEdit from "./edit.png";
import styles from "./Card.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Card(props) {
  const { datos, color } = props;
  const { deleteCard, editCard } = useContext(GlobalContext);

  return (
    <div className={styles.card}>
      <iframe
        className={styles.frameVideo}
        width="100%"
        height="auto"
        src={datos.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className={styles.titulo}>{datos.titulo}</h3>
      <div className={styles.iconos}>
        <div className={styles.divIcon} onClick={() => deleteCard(datos.id)}>
          <img src={iconDelete} alt="" className={styles.imgIcon} />
          <p>DELETE</p>
        </div>
        <div className={styles.divIcon} onClick={() => editCard(datos.id)}>
          <img src={iconEdit} alt="" className={styles.imgIcon} />
          <p>EDIT</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
