import { useState } from "react";




function Letras(props) {
    const { letra, palavra, dentro, setDentro, preencher, setPreencher  } = props
    const [selecionada, setSelecionada] = useState("")

    return (
        <button disabled={props.começou && selecionada ? true : false} onClick={() => verificaLetra(letra, palavra, setSelecionada, dentro, setDentro, preencher, setPreencher)} className={`letra ${!(props.começou && !selecionada) ? "desativado" : ""}`}>
            {letra}
        </button>
    )
}
const verificaLetra = (letra, palavra, setSelecionada, dentro, setDentro, preencher, setPreencher) => {
    setSelecionada("sim")
    const novoPreencher = [...preencher]
    for (let index = 0; index < palavra.length; index++) {
        
        if (letra.toLowerCase() === palavra[index]) {
            novoPreencher[index] = letra.toLowerCase() + " "
            console.log(novoPreencher)
            setPreencher(novoPreencher)
            //setDentro(dentro.push(index))
        }
    }


    console.log(palavra, letra.toLowerCase() )
    
}
export default Letras;