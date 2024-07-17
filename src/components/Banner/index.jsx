import styles from "./Banner.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";

function Banner() {
  const { videos } = useContext(GlobalContext);

  let lastVideo = videos[videos.length - 1];

  return (
    <div className={styles.banner}>
      <div className={styles.capa}>
        <div className={styles.divCard}>
          <div className={styles.divInfo}>
            <h1 className={styles.categoria}>NOVEDADES</h1>
            <h2 className={styles.titulo}>
              ¡Nuevo video tutorial de{" "}
              {lastVideo?.instrumento && lastVideo?.instrumento}!
            </h2>
            <p className={styles.texto}>
              Aprende a tocar {lastVideo?.titulo && lastVideo?.titulo}
            </p>
          </div>
          <iframe
            className={styles.imgBanner}
            width="100%"
            height="auto"
            src={lastVideo?.url && lastVideo?.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Banner;
