import palavras from "../palavras";
import Letras from "./Letras";
import forceUpdate from "react"

function Jogo(props) {
    
    const {preencher, setPreencher, forca, erro, palavra, setErro, setChute} = props
    return (
        <div className="jogo">
            <img className="forca" src={forca} alt="imagem da forca"/>
            <button disabled={(props.start ? true : false)} className={`escolher ${props.start ? "escondido" : ""}`} onClick={() => (comecaJogo(setPreencher, props.setStart, props.setPalavra, setErro, setChute))}>Escolher Palavra</button>

            <div className={`palavra ${erro>= 6 ? "vermelho" : ""} ${preencher.toString() === palavra.toString() ? "verde" : ""}`}>{(erro >= 6 ? palavra : preencher)}</div>
        </div>
    )
    
}

export default Jogo;

function comecaJogo(setPreencher, setStart, setPalavra, setErro, setChute){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    const arrayPalavra = [...palavra]
    setPalavra(arrayPalavra)
    let preencher = arrayPalavra.map(l => ("_ "))
    setPreencher(preencher)
    setStart(true)
    setErro(0)
    setChute("")
}
