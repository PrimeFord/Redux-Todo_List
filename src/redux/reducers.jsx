const listArr = [
  { todo: "Eat", isCompleted: false },
  { todo: "Sleep", isCompleted: true },
];

export const todoReducer = (
  state = [
    { todo: "Eat", isCompleted: false },
    { todo: "Sleep", isCompleted: true },
  ],
  action
) => {
  switch (action.type) {
    case "ADDTODO":
      return state.concat({ todo: list, isCompleted: false });
    case "TOGGLE":
      return (state[id] = {
        todo: newTodos[id].todo,
        isCompleted: !newTodos[id].isCompleted,
      });
    case "DELETE":
      return state.delete(id);
  }
};
