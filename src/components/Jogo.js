import { useState } from "react";
import palavras from "../palavras";

function Jogo(props) {
    
    const {preencher, setPreencher, forca} = props
    return (
        <div className="jogo">
            <img className="forca" src={forca} alt="imagem da forca"/>
            <button disabled={(props.start ? true : false)} className={`escolher ${props.start ? "escondido" : ""}`} onClick={() => (comecaJogo(setPreencher, props.setStart, props.setPalavra))}>Escolher Palavra</button>

            <div className="palavra">{preencher}</div>
        </div>
    )

}

export default Jogo;

function comecaJogo(setPreencher, setStart, setPalavra){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    const arrayPalavra = [...palavra]
    setPalavra(arrayPalavra)
    let preencher = arrayPalavra.map(l => ("_ "))
    setPreencher(preencher)
    setStart("sim")
    
}
