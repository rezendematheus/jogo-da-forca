



function Letras(props) {
    return (
        <div className={`letra ${props.começou ? "" : "desativado"}`}>
            {props.letra}
        </div>
    )
}

export default Letras;