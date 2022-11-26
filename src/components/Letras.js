import { useState } from "react";
const forcas = ["assets/forca0.png",
                "assets/forca1.png",
                "assets/forca2.png",
                "assets/forca3.png",
                "assets/forca4.png",
                "assets/forca5.png",
                "assets/forca6.png"
            ]



function Letras(props) {
    const { letra, palavra, preencher, setPreencher, erro, setErro, forca, setForca} = props
    const [selecionada, setSelecionada] = useState("")

    return (
        <button disabled={props.começou && selecionada ? true : false} onClick={() => verificaLetra(letra, palavra, setSelecionada, preencher, setPreencher, erro, setErro, forca, setForca)} className={`letra ${!(props.começou && !selecionada) ? "desativado" : ""}`}>
            {letra}
        </button>
    )
}
const verificaLetra = (letra, palavra, setSelecionada, preencher, setPreencher, erro, setErro, setForca) => {
    setSelecionada("sim")
    const novoPreencher = [...preencher]
    if(palavra.includes(letra.toLowerCase())){
        for (let index = 0; index < palavra.length; index++) {
        
            if (letra.toLowerCase() === palavra[index]) {
                novoPreencher[index] = letra.toLowerCase() + " "
                console.log(novoPreencher)
                setPreencher(novoPreencher)
                
            }
        }
    }
    else{
        const novoErro = erro + 1
        setErro(novoErro)
        console.log(novoErro)
        atualizaForca(novoErro, setForca)
    }


    console.log(palavra, letra.toLowerCase() )
    
}
function atualizaForca(erro, setForca){
    setForca(forcas[erro])
  }

export default Letras;