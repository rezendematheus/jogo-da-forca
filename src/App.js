let abc = "abcdefghijklmnopqrstuvwxyz"
let arrayabc = [...abc]
console.log(arrayabc)


function App() {
  return (
    <div className="corpo">
      <Jogo />
      {arrayabc.map(letter => (<Letras letra={letter}/>))}
      <Chute />
    </div>
  );
}

export default App;
