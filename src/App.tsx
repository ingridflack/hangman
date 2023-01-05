import Categories from "./components/Categories";
import Gallows from "./components/Gallows";
import { MAX_ATTEMPTS, useGameLogic } from "./components/useGameLogic";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { GlobalStyle, MainContainer, WordWrapper } from "./styles/global";
import FinishMessage from "./components/FinishMessage";

// Investigar:
// Por que o botão de jogar novamente não funciona?
// Rever lógica da exibição das partes do corpo do boneco

function App() {
  const { state, onCategoryChange, onNewAttempt } = useGameLogic();

  const { word, normalizedWord, attempts, category, wrong_attempts } = state;

  const handleGameContent = () => {
    const won = normalizedWord
      .split("")
      .every((letter: string) => attempts.includes(letter));

    const lost = wrong_attempts > MAX_ATTEMPTS;

    if (!category) {
      return <Categories onClick={onCategoryChange} />;
    }

    if (won) {
      return (
        <MainContainer>
          <FinishMessage message="Parabéns! Você ganhou." />
        </MainContainer>
      );
    }

    if (lost) {
      return (
        <MainContainer>
          <FinishMessage message="Você perdeu!" />
        </MainContainer>
      );
    }

    return (
      <MainContainer>
        <WordWrapper>
          <Gallows wrongAttempts={wrong_attempts} />
          <Word
            attempts={attempts}
            word={word}
            normalizedWord={normalizedWord}
          />
        </WordWrapper>
        <Keyboard
          attempts={attempts}
          onClick={onNewAttempt}
          word={normalizedWord}
        />
      </MainContainer>
    );
  };

  return (
    <MainContainer>
      <GlobalStyle />

      <h1>Hangman Game</h1>

      <>{handleGameContent()}</>
    </MainContainer>
  );
}

export default App;
