import { useState } from "react";
import HeaderStyled from "./style";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [page, setPage] = useState('Introduction');
    const navigate = useNavigate();

    return (
        <HeaderStyled>
            <h1>Engenharia de Sistemas</h1>
            <div>
                <button className={page === "Introduction" ? "disabled" : "activated"}
                    onClick={() => navigate("/")}>Introdução ao Curso</button>
                <button className={page === "Map" ? "disabled" : "activated"}
                    onClick={() => navigate("/mapa")}>Mapa Mundi</button>
                <button className={page === "Game" ? "disabled" : "activated"}
                    onClick={() => navigate("/jogo")}>Jogo da Forca</button>
            </div>
        </HeaderStyled>
    )
}