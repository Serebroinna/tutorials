function InputForm({label, type, setValor}){

    const manejarChange = (e) => {
        setValor(e.target.value);
    }
    return(
        <>
            <label htmlFor="">{label}</label>
            <input type={type} name="" id="" maxLength="50" onChange={manejarChange} required/>
        </>
        
    )
};

export default InputForm;