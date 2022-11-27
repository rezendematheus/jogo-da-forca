import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import { useState } from "react"
const forcas = ["assets/forca0.png",
                "assets/forca1.png",
                "assets/forca2.png",
                "assets/forca3.png",
                "assets/forca4.png",
                "assets/forca5.png",
                "assets/forca6.png"
            ]
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrayabc = [...abc]
console.log(arrayabc)


function App() {
  
  const [forca, setForca] = useState(forcas[0])
  const [palavra, setPalavra] = useState([])
  const [start, setStart] = useState("")
  const [preencher, setPreencher] = useState("")
  const [dentro, setDentro] = useState([])
  const [erro, setErro] = useState(0)
  return (
    <div className="corpo">
      <Jogo preencher = {preencher} setPreencher ={setPreencher} start={start} setStart={setStart} palavra={palavra} setPalavra={setPalavra} erro={erro} setErro={setErro} forca={forca} setForca={setForca}/>
      <div className="baixo">
        <div className="letras">
          {arrayabc.map(letter => (<Letras key={letter} letra={letter} começou={start} palavra={palavra} dentro={dentro} setDentro={setDentro} preencher={preencher} setPreencher={setPreencher} erro={erro} setErro={setErro} forca={forca} setForca={setForca} setStart={setStart}/>))}
        </div>
        <Chute />
      </div>

    </div>
  );//
  
}

export default App;

