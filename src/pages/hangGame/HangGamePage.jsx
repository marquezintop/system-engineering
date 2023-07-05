import { useEffect, useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import words from "./words";
import alphabet from "./alphabet";
import { BackButton, Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function HangGamePage({setVisible}) {
  const [lettersUsed, setLettersUsed] = useState(alphabet);

  const [errors, setErrors] = useState(0);

  const [choosenWord, setChoosenWord] = useState("");

  const [arrayChoosenWord, setArrayChoosenWord] = useState([]);

  const [win, setWin] = useState(false);

  const [lose, setLose] = useState(false);
  
  const [right, setRight] = useState(0);

  useEffect(() => {
    setVisible(false);
  }, [])

  const navigate = useNavigate()
  
  function startGame() {
    //Restart the states for a new game
    setErrors(0);
    setRight(0);
    setLettersUsed([]);
    setArrayChoosenWord([]);
    setWin(false);
    setLose(false);
    //Pick random word from array words
    const randomWord = words[Math.floor(Math.random() * words.length)];
    //Make string randomWord converts into an array of underlines to put in the screen
    const arrayRandomWord = randomWord.split("");
    setChoosenWord(randomWord);
    arrayRandomWord.map((p, i) => (
      arrayRandomWord[i] = "_"
    ));
    setArrayChoosenWord(arrayRandomWord);
  }

  function pickLetter(letter) {
    //Disable the letter used putting it in the array
    setLettersUsed([...lettersUsed, letter]);
    //Pick the array of the choosen word
    const arrayWord = [...arrayChoosenWord];
    //Number of correct answers before checking the letter
    let itsRight = right;
    //Variable to check if the letter picked is in the word
    let letterIsRight = false;
    //Checking if the letter is in the word and putting in the screen
    for(let i=0; i<choosenWord.length; i++) {
      if (letter.toLowerCase() === choosenWord[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
        itsRight ++;
        setRight(itsRight);
        letterIsRight = true;
        arrayWord[i] = choosenWord[i].toUpperCase();
        setArrayChoosenWord(arrayWord);
      };
    };
    //Check if the letter picked is wrong, if it is add an error to the count and change the image forca
    if (!letterIsRight) {
      const errorsInt = errors + 1;
      setErrors(errorsInt);
      //Check if the errors at the moments is equal the maximum (6)
      //if it's true finish the game as a loss
      if (errorsInt === 6) {
        setArrayChoosenWord(choosenWord.toUpperCase());
        setLettersUsed(alphabet);
        setLose(true);
      };
    };
    //Check if the correct answers at the moments is equal to the length of the choosen word
    //if it's true finish the game as a win
    if (itsRight === arrayChoosenWord.length) {
      setArrayChoosenWord(choosenWord.toUpperCase());
      setLettersUsed(alphabet);
      setWin(true);
    };
  };

  return (
      <Container>
        <BackButton onClick={() => {
          setVisible(true);
          navigate("/")
        }}><p>Voltar à página inicial</p></BackButton>
        <Game startGame={startGame} arrayChoosenWord={arrayChoosenWord} errors={errors} lose={lose} win={win}/>
        <Letters lettersUsed={lettersUsed} pickLetter={pickLetter} setLettersUsed={setLettersUsed}/>
      </Container>
  );
};