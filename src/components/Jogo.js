import { useState } from "react";
import palavras from "../palavras";
const forcas = ["assets/forca0",
                "assets/forca1",
                "assets/forca2",
                "assets/forca3",
                "assets/forca4",
                "assets/forca5",
                "assets/forca6"
            ]

function Jogo(props) {
    const [preencher, setPreencher] = useState("")
    return (
        <div className="jogo">
            <img className="forca" src="assets/forca0.png" alt="imagem da forca"/>
            <div className="escolher" onClick={() => (comecaJogo(setPreencher, props.começou))}>Escolher Palavra</div>
            <div className="palavra">{preencher}</div>
        </div>

    )
}

export default Jogo;

function comecaJogo(estado, começou){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    console.log(palavra)
    const arrayPalavra = [...palavra]
    let preencher = arrayPalavra.map(l => ("_ "))
    estado(preencher)
    começou("sim")


}