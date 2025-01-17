import { createContext, useState, useEffect } from "react";
import swal from "sweetalert";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoSeleccionado, setVideoSeleccionado] = useState();
  const [generos, setGeneros] = useState([]);
  const [lastVideo, setLastVideo] = useState({});
  const [deleteVideo, setDeleteVideo] = useState(false);

  // GET instrumentos
  useEffect(() => {
    fetch(
      "https://fake-api-tau-five.vercel.app/instrumentos")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  // GET generos
  useEffect(() => {
    fetch("https://fake-api-tau-five.vercel.app/generos")
      .then((response) => response.json())
      .then((data) => setGeneros(data));
  }, []);

  // GET videos
  useEffect(() => {
    fetch("https://fake-api-tau-five.vercel.app/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, [deleteVideo]);

  // DELETE video
  const deleteCard = (id) => {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez que se haya borrado el video no podras recuperarlo",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) =>{
      if (willDelete) {
        await fetch(
          `https://fake-api-tau-five.vercel.app/videos/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        swal("Video eliminado", {
          icon: "success",
        });
        setDeleteVideo(!deleteVideo);
      }
    });
  };

  const editCard = (id) => {
    setVideoSeleccionado(id);
  };

  return (
    <GlobalContext.Provider
      value={{
        categorias,
        setCategorias,
        videos,
        setVideos,
        videoSeleccionado,
        setVideoSeleccionado,
        generos,
        setGeneros,
        editCard,
        deleteCard,
        lastVideo,
        setLastVideo,
        setDeleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
