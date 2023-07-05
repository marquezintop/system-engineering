import Letter from "./Letter";
import alphabet from "./alphabet";
import { ContainerLetters } from "./style";

export default function Letters({lettersUsed, pickLetter,}) {

    return (
        <ContainerLetters>
        {alphabet.map(letter => (
            <Letter disabled={lettersUsed.includes(letter)} 
            letter={letter} 
            key={letter}
            pickLetter={pickLetter}/>
        ))}
        </ContainerLetters>
    );
};