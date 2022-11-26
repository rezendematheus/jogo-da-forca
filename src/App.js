import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import { useState } from "react"
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrayabc = [...abc]
console.log(arrayabc)


function App() {
  const [palavra, setPalavra] = useState([])
  const [start, setStart] = useState("")
  const [preencher, setPreencher] = useState("")
  const [dentro, setDentro] = useState([])
  return (
    <div className="corpo">
      <Jogo preencher = {preencher} setPreencher ={setPreencher} start={start} setStart={setStart} palavra={palavra} setPalavra={setPalavra} />
      <div className="baixo">
        <div className="letras">
          {arrayabc.map(letter => (<Letras key={letter} letra={letter} começou={start} palavra={palavra} dentro={dentro} setDentro={setDentro}/>))}
        </div>
        <Chute />
      </div>

    </div>
  );
}

export default App;
