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

  const [titulo, setTitulo] = useState("");
  const [instrumento, setInstrumento] = useState("");
  const [genero, setGenero] = useState("");
  const [url, setUrl] = useState("");

  // GET instrumentos
  useEffect(() => {
    fetch("http://localhost:3000/instrumentos")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  // GET generos
  useEffect(() => {
    fetch("http://localhost:3000/generos")
      .then((response) => response.json())
      .then((data) => setGeneros(data));
  }, []);

  // GET videos
  useEffect(() => {
    fetch("http://localhost:3000/videos")
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
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:3000/videos/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setDeleteVideo(!deleteVideo);
        swal("Video eliminado", {
          icon: "success",
        });
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
        titulo,
        instrumento,
        genero,
        url,
        setTitulo,
        setInstrumento,
        setGenero,
        setUrl,
        lastVideo,
        setLastVideo,
        setDeleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
