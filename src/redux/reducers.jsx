import { ADDTODO, TOGGLE, DELETE, DELETEALL } from "./action";

const listArr = [
  { id: 1, title: "Sleep", isCompleted: false },
  { id: 2, title: "Eat", isCompleted: false },
  { id: 3, title: "Read", isCompleted: true },
];

export const todoReducer = (state = listArr, action) => {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payload];

    case TOGGLE:
      let toggleTodo = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
        }
        toggleTodo.push(item);
      });
      return toggleTodo;
    case DELETE:
      const filterTodo = state.filter((e) => e.id !== action.payload);
      return filterTodo;
    case DELETEALL:
      return [];
    default:
      return state;
  }
};
