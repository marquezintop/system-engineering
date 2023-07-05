import { LetterStyled } from "./style";

export default function Letter({letter, disabled, pickLetter}) {


    return (
        <LetterStyled onClick={() => {
            pickLetter(letter)
        }}
        disabled={disabled}>
                {letter}
        </LetterStyled>
    );
};