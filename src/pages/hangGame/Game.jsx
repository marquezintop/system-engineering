import forca0 from "../../assets/forca0.png";
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";
import { ChooseWord, ChoosenWord, ContainerGame } from "./style";

export default function Game({startGame, arrayChoosenWord, errors, win, lose}) {
    const forcaArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    return (
        <ContainerGame>
            <img src={forcaArray[errors]} alt={forca0}/>
            <ChooseWord onClick={startGame}><p>Palavra Aleatória!</p></ChooseWord>
            <ChoosenWord win={win} lose={lose}>{arrayChoosenWord}</ChoosenWord>
        </ContainerGame>
    );
};