import { useEffect, useState } from "react";

import { Grid } from "./components/grid/grid";
import words from "./constants/words";

import './App.css';

export default function App() {
  const [solution] = useState(words[Math.floor(Math.random() * words.length)]);
  const [currentGuess, setCurrentGuess] = useState('raise'); // mathematically best first guess
  const [guesses, setGuesses] = useState([]);
  const [wordArray, setWordArray] = useState(words);

  const handleUserKeyPress = (event) => {
    const { keyCode } = event;
    if (currentGuess !== solution) {
      if (guesses.length < 6) {
        if (keyCode === 13) { // ENTER button
          guesses.push(currentGuess);
          setGuesses(guesses);
          addNewGuess();
        }
      }
    }
  };

  const addNewGuess = () => {
    let newWords = [];

    // filter the words array based on the new words
    currentGuess.split('').forEach((letter, i) => {

      const newArray = !newWords.length ? wordArray : newWords;

      newWords = newArray.filter(word => {
        if (!solution.split('').includes(letter)) {
          return !word.includes(letter);
        } else if (letter === solution[i]) {
          return word.charAt(i) === letter;
        } else if (letter !== solution[i]) {
          return word.includes(letter)
        }

        return true;
      })
    })

    setWordArray(newWords);

    // get the next guess from the remaining list
    const newGuessIndex = Math.floor(Math.random() * newWords.length);
    const newGuess = newWords[newGuessIndex];
    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Press ENTER to solve WORDLE</h2>
      <div className="table-container">
        {solution && <Grid guesses={guesses} currentGuess={currentGuess} solution={solution} />}
      </div>
    </div>
  );
}
