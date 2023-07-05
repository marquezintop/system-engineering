import { useState } from "react";
import HeaderStyled from "./style";

export default function Header() {

    const [page, setPage] = useState('Home')

    return (
        <HeaderStyled>
            <h1>Engenharia de Sistemas</h1>
            <div>
                <button className={page === "Home" ? "disabled" : "activated"}
                    onClick={() => navigate("/")}>Introdução ao Curso</button>
                <button className={page === "AboutUs" ? "disabled" : "activated"}
                    onClick={() => navigate("/about-us")}>Mapa Mundi</button>
                <button className={page === "Meteors" ? "disabled" : "activated"}
                    onClick={() => navigate("/meteors")}>Jogo da Forca</button>
            </div>
        </HeaderStyled>
    )
}