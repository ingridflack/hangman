import Categories from "./components/Categories";
import Gallows from "./components/Gallows";
import { MAX_ATTEMPTS, useGameLogic } from "./components/useGameLogic";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import {
  GlobalStyle,
  MainContainer,
  WordWrapper,
  Wrapper,
} from "./styles/global";
import FinishMessage from "./components/FinishMessage";

// Investigar:
// Rever lógica da exibição das partes do corpo do boneco

function App() {
  const { state, onCategoryChange, onNewAttempt, onResetGame } = useGameLogic();

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
          <FinishMessage
            onResetGame={onResetGame}
            message="Parabéns! Você ganhou."
          />
        </MainContainer>
      );
    }

    if (lost) {
      return (
        <MainContainer>
          <FinishMessage onResetGame={onResetGame} message="Você perdeu!" />
        </MainContainer>
      );
    }

    return (
      <MainContainer>
        <Wrapper>
          <Gallows wrongAttempts={wrong_attempts} />

          <WordWrapper>
            <p>
              Categoria escolhida: <strong>{category}</strong>
            </p>
            <Word
              attempts={attempts}
              word={word}
              normalizedWord={normalizedWord}
            />
          </WordWrapper>
        </Wrapper>
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

      <h1>Jogo da Forca</h1>

      <>{handleGameContent()}</>
    </MainContainer>
  );
}

export default App;
