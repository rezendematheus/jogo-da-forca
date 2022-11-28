import { useEffect, useState } from "react";
const forcas = ["assets/forca0.png",
                "assets/forca1.png",
                "assets/forca2.png",
                "assets/forca3.png",
                "assets/forca4.png",
                "assets/forca5.png",
                "assets/forca6.png"
            ]



function Letras(props) {
    const { letra, palavra, preencher, setPreencher, erro, setErro, setForca, setStart, start} = props
    const [selecionada, setSelecionada] = useState(start)
    const compara = preencher.toString() === palavra.toString()
    

    

    
    useEffect(() => {
        if (!start) {
          setSelecionada(false);
          console.log(selecionada)
        }
        console.log("useEffect called")
      }, [selecionada]);

      const condicao = !(props.começou && !selecionada) || (erro>= 6 || compara)

    return (
        <button data-test="letter" disabled={!start ? true : false} onClick={() => verificaLetra(letra, palavra, setSelecionada, preencher, setPreencher, erro, setErro, setForca, setStart)} className={`letra ${(condicao)  ? "desativado" : ""}`}>
            {letra}
        </button>
    )
}
const verificaLetra = (letra, palavra, setSelecionada, preencher, setPreencher, erro, setErro, setForca, setStart) => {
    setSelecionada(true)
    const novoPreencher = [...preencher]
    console.log(palavra)
    if(palavra.includes(letra.toLowerCase())){
        for (let index = 0; index < palavra.length; index++) {
        
            if (letra.toLowerCase() === palavra[index]) {
                novoPreencher[index] = letra.toLowerCase()
                setPreencher(novoPreencher)
                
            }
        }
    }
    else{
        const novoErro = erro + 1
        setErro(novoErro)
        setForca(forcas[novoErro])
        // verificaEstado()
    }


    // function verificaEstado(){
    //     const compara = preencher.toString() === palavra.toString()
    //     if(erro >= 6 || compara){
    //       setStart("")
    //     }
    //     else{
    //       console.log("executando")
    //       console.log(preencher)
    //       console.log(palavra)
    //     }
    //   }
}

export default Letras;