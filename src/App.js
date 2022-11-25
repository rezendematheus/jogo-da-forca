import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrayabc = [...abc]
console.log(arrayabc)


function App() {
  return (
    <div className="corpo">
      <Jogo />
      <div className="baixo">
        <div className="letras">
          {arrayabc.map(letter => (<Letras letra={letter} />))}
        </div>
        <Chute />
      </div>

    </div>
  );
}

export default App;
