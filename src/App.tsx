import ActionButton from "./components/Buttons/ActionButton";
import Gallows from "./components/Gallows";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <h1>Hangman Game</h1>
      <ActionButton />
      <Gallows />
      <Word />
      <Keyboard />
    </>
  );
}

export default App;
