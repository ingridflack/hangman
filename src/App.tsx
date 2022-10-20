import Categories from "./components/Categories";
import Gallows from "./components/Gallows";
import { useGameLogic } from "./components/useGameLogic";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { GlobalStyle } from "./styles/global";

function App() {
  const { state, onCategoryChange, onNewAttempt } = useGameLogic();

  console.log({ state });

  return (
    <>
      <GlobalStyle />

      <h1>Hangman Game</h1>

      {!state.category ? (
        <Categories onClick={onCategoryChange} />
      ) : (
        <>
          <Gallows />
          <Word attempts={state.attempts} word={state.word} />
          <Keyboard attempts={state.attempts} onClick={onNewAttempt} />
        </>
      )}
    </>
  );
}

export default App;
