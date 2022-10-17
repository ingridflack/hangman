import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Gallows from "./components/Gallows";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { GlobalStyle } from "./styles/global";
import words from "./words.json";

function App() {
  const [word, setWord] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [attempts, setAttempts] = useState<string[]>([]);

  const handleChooseCategory = (category: string) => () => {
    setCategory(category);
  };

  const handleAttempt = (letter: string) => {
    console.log({ letter });
    setAttempts((prev) => [...prev, letter]);
  };

  useEffect(() => {
    if (category && !word) {
      const categoryWords = category && words[category as keyof typeof words];
      const randomIndex = Math.floor(Math.random() * categoryWords.length);

      setWord(categoryWords[randomIndex]);
    }
  }, [word, category]);

  console.log(word, attempts);

  return (
    <>
      <GlobalStyle />

      <h1>Hangman Game</h1>

      {!category ? (
        <Categories onClick={handleChooseCategory} />
      ) : (
        <>
          <Gallows />
          <Word word={word} />
          <Keyboard attempts={attempts} onClick={handleAttempt} />
        </>
      )}
    </>
  );
}

export default App;
