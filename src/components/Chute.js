
function Chute(props) {
    const {chute, setChute, palavra, setPreencher, setErro, start} = props
    return (
        <div className="chute">
            Já sei a palavra!
            <input data-test="guess-input" disabled={start ? false : true} value={start ? chute : ""} onChange={(event) => setChute(event.target.value)}></input>
            <button data-test="guess-button" disabled={start ? false : true} onClick={()=> chuta(chute)} className="letra">Chutar</button>
        </div>
    )
    function chuta(chute){
        if(chute === palavra.toString().replaceAll(",","")){
            setPreencher(palavra)
        }
        else{
            setErro(6)
        }
    }
}

export default Chute;