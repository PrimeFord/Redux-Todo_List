const listArr = [
  { todo: "Eat", isCompleted: false },
  { todo: "Sleep", isCompleted: true },
];

export const todoReducer = (state = listArr, action) => {
  switch (action.type) {
    case "ADDTODO":
      return state.concat({ todo: action.payload.todo, isCompleted: false });
    // case "TOGGLE":
    //   return (state[id] = {
    //     ...state,
    //     isCompleted: !newTodos[id].isCompleted,
    //   });
    // case "DELETE":
    //   return state.delete(id);
  }
};
