import { useEffect, useReducer } from "react";
import words from "../words.json";

export const MAX_ATTEMPTS = 6;

export const initialGameState = {
  word: "",
  normalizedWord: "",
  category: "",
  attempts: [],
  wrong_attempts: 0,
};

const SELECT_CATEGORY = "select_category";
const SET_WORD = "set_word";
const NEW_ATTEMPT = "new_attempt";
const WRONG_ATTEMPT = "wrong_attempt";
const RESET_STATE = "reset_state";

export function hangmanReducer(state: any, action: any) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case SET_WORD:
      const word = action.payload;
      const normalizedWord = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return { ...state, word, normalizedWord };
    case NEW_ATTEMPT:
      return { ...state, attempts: [...state.attempts, action.payload] };
    case WRONG_ATTEMPT:
      return {
        ...state,
        wrong_attempts: state.wrong_attempts + 1,
      };
    case RESET_STATE:
      return { ...initialGameState };
    default:
      return state;
  }
}

export function useGameLogic() {
  const [state, dispatch] = useReducer(hangmanReducer, initialGameState);

  const { category, word, normalizedWord } = state;

  useEffect(() => {
    if (category && !word) {
      const categoryWords = category && words[category as keyof typeof words];
      const randomIndex = Math.floor(Math.random() * categoryWords.length);

      dispatch({
        type: SET_WORD,
        payload: categoryWords[randomIndex],
      });
    }
  }, [word, category]);

  const handleChooseCategory = (category: string) => () => {
    dispatch({ type: SELECT_CATEGORY, payload: category });
  };

  const handleWrongAttempts = (letter: string) => {
    const isWrong = !normalizedWord.includes(letter);

    if (isWrong) {
      dispatch({ type: WRONG_ATTEMPT });
    }
  };

  const handleAttempt = (letter: string) => {
    dispatch({ type: NEW_ATTEMPT, payload: letter.toLowerCase() });

    handleWrongAttempts(letter);
  };

  const handleResetState = () => {
    dispatch({ type: RESET_STATE });
  };

  return {
    state,
    onCategoryChange: handleChooseCategory,
    onNewAttempt: handleAttempt,
    onResetGame: handleResetState,
  };
}
