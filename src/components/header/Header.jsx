import { useState } from "react";
import HeaderStyled from "./style";
import { useNavigate } from "react-router-dom";

export default function Header({page, visible}) {
    const navigate = useNavigate();

    return (
        <HeaderStyled visible={visible}>
            <h1>Engenharia de Sistemas</h1>
            <div>
                <button className={page === "Introduction" ? "disabled" : "activated"}
                    onClick={() => navigate("/")}>Introdução ao Curso</button>
                <button className={page === "Map" ? "disabled" : "activated"}
                    onClick={() => navigate("/mapa")}>Mapa Mundi</button>
                <button className={page === "Game" ? "game disabled" : "game activated"}
                    onClick={() => navigate("/jogo")}>Jogo da Forca</button>
            </div>
        </HeaderStyled>
    )
}