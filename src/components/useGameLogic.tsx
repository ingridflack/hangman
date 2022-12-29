import { useCallback, useEffect, useReducer } from "react";
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

export function hangmanReducer(state: any, action: any) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case "set_word":
      const word = action.payload;
      const normalizedWord = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return { ...state, word, normalizedWord };
    case "new_attempt":
      return { ...state, attempts: [...state.attempts, action.payload] };
    case "wrong_attempt":
      return {
        ...state,
        wrong_attempts: state.wrong_attempts + 1,
      };
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
        type: "set_word",
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
      dispatch({ type: "wrong_attempt" });
    }
  };

  const handleAttempt = (letter: string) => {
    dispatch({ type: "new_attempt", payload: letter.toLowerCase() });

    handleWrongAttempts(letter);
  };

  return {
    state,
    onCategoryChange: handleChooseCategory,
    onNewAttempt: handleAttempt,
  };
}
