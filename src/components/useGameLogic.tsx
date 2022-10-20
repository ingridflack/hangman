import { useCallback, useEffect, useReducer } from "react";
import words from "../words.json";

export const initialGameState = {
  word: "",
  category: "",
  attempts: [],
};

const SELECT_CATEGORY = "select_category";

export function hangmanReducer(state: any, action: any) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case "set_word":
      return { ...state, word: action.payload };
    case "new_attempt":
      return { ...state, attempts: [...state.attempts, action.payload] };
    default:
      return state;
  }
}

export function useGameLogic() {
  const [state, dispatch] = useReducer(hangmanReducer, initialGameState);

  const { category, word } = state;

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

  const handleAttempt = (letter: string) => {
    dispatch({ type: "new_attempt", payload: letter });
  };

  return {
    state,
    onCategoryChange: handleChooseCategory,
    onNewAttempt: handleAttempt,
  };
}
