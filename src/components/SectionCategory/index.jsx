import Card from "../Card";
import styles from "./SectionCategory.module.css";


function SectionCategory({ videos, categoria, color}) {
  
  return <>{ videos.length > 0 && //condicion para que renderice solo la seccion que contenga videos.
    <section className={styles.section}>
      <div className={styles.divCategoria} style={{ borderBottom: `3px solid ${color}` }}>
        <h1>{categoria}</h1>
      </div>
      <div className={styles.divCards}>
        {videos.map((video,index)=>{
          return(
            <Card datos={video} key={index} color={color}/>
          );
        })};
      </div>
    </section>
  };</>
}

export default SectionCategory;
