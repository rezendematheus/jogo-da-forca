import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import { useState } from "react"
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrayabc = [...abc]
console.log(arrayabc)


function App() {
  const [start, setStart] = useState("")
  return (
    <div className="corpo">
      <Jogo começou={setStart}/>
      <div className="baixo">
        <div className="letras">
          {arrayabc.map(letter => (<Letras letra={letter} começou={start} />))}
        </div>
        <Chute />
      </div>

    </div>
  );
}

export default App;
