import styles from "./InputSelect.module.css"

function InputSelect(props){

    const {label, opciones, setValor} = props;

    const manejarChange = (e) => {
        setValor(e.target.value);
    }

    return(
        <>
        <label htmlFor="">{label}</label>
        <select className={styles.selectCategoria} onChange={manejarChange} required>
            <option value="" select="true"></option>
            {opciones.map((item, index) => {
              return (<option key={index}>{label == "Instrumento"? item.instrumento : item.genero}</option>)
            })};
        </select>
        </>
    );
};

export default InputSelect;