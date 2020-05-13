import { createStore } from "redux";

/////////type definition////////////
export interface InitialState {
  boolAlternate: boolean;
  inputText: string;
}
interface ActionDefinition {
  type: typeof booleanChecker | typeof changeText;
  content: string;
}
const booleanChecker = "bool";
const changeText = "text";
///////////////////////////////////

function todoReducer(
  state: InitialState = { boolAlternate: false, inputText: "" },
  action: ActionDefinition
) {
  switch (action.type) {
    case booleanChecker:
      return { ...state, boolAlternate: !state.boolAlternate };
    case changeText:
      return { ...state, inputText: action.content };
    default:
      return state;
  }
}

const todoProps = createStore(todoReducer);

/////dispatchFunction////////////
export const booleanDispatch = () => {
  return { type: booleanChecker };
};

export const typingEvent = (typing: string) => {
  return { type: changeText, content: typing };
};

export default todoProps;
