
const forcas = ["assets/forca0",
                "assets/forca1",
                "assets/forca2",
                "assets/forca3",
                "assets/forca4",
                "assets/forca5",
                "assets/forca6"
            ]

function Jogo() {
    return (
        <div className="jogo">
            <img className="forca" src="assets/forca0.png" alt="imagem da forca"/>
            <div className="escolher">Escolher Palavra</div>
            <div className="palavra">_ _ _ _ _ _ _ _ </div>
        </div>

    )
}

export default Jogo;