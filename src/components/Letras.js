import { useState } from "react";




function Letras(props) {
    const { letra, palavra } = props
    const [selecionada, setSelecionada] = useState("")
    const { dentro, setDentro } = props

    return (
        <button disabled={props.começou && selecionada ? true : false} onClick={() => verificaLetra(letra, palavra, setSelecionada, dentro, setDentro)} className={`letra ${!props.começou && !selecionada ? "desativado" : ""}`}>
            {letra}
        </button>
    )
}
const verificaLetra = (letra, palavra, setSelecionada, dentro, setDentro) => {
    setSelecionada("sim")

    for (let index = 0; index < palavra.length; index++) {
        if (letra.toLowerCase() === letra[index]) {
            setDentro(dentro.push(index))
            console.log(dentro)
        }

    }

    console.log(palavra, letra)
    console.log(dentro)
}
export default Letras;