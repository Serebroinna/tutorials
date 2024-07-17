import Banner from "../../components/Banner";
import Modal from "../../components/Modal";
import SectionCategory from "../../components/SectionCategory";
import { useContext } from "react";
import {GlobalContext} from "../../context/GlobalContext";

function Inicio(){
    
    const {categorias, videos} = useContext(GlobalContext);

    return(
        <>
        <Banner />
        {categorias.map((categoria, index)=>{
            return(
            <SectionCategory categoria={categoria.instrumento} 
            color={categoria.color}
            videos={videos.filter((video)=> video.instrumento == categoria.instrumento)}
            key={index}
            />)
        })}
        <Modal />
        </> 
    );
};

export default Inicio;