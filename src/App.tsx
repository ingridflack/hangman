import Categories from "./components/Categories";
import Gallows from "./components/Gallows";
import { MAX_ATTEMPTS, useGameLogic } from "./components/useGameLogic";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { GlobalStyle } from "./styles/global";

function App() {
  const { state, onCategoryChange, onNewAttempt } = useGameLogic();

  const { word, normalizedWord, attempts, category, wrong_attempts } = state;

  console.log({ state });

  const handleGameContent = () => {
    if (!category) {
      return <Categories onClick={onCategoryChange} />;
    }

    const won = normalizedWord
      .split("")
      .every((letter: string) => attempts.includes(letter));

    const lost = wrong_attempts > MAX_ATTEMPTS;

    console.log(won);

    if (won) {
      return <p>Parabéns! Você ganhou.</p>;
    }

    return (
      <>
        {lost && <p>Você perdeu!</p>}

        <Gallows wrongAttempts={wrong_attempts} />
        <Word attempts={attempts} word={word} normalizedWord={normalizedWord} />
        <Keyboard
          attempts={attempts}
          onClick={onNewAttempt}
          word={normalizedWord}
        />
      </>
    );
  };

  return (
    <>
      <GlobalStyle />

      <h1>Hangman Game</h1>

      <>{handleGameContent()}</>
    </>
  );
}

export default App;
