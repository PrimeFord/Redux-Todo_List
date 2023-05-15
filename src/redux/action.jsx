export const add = (todo) => {
  return {
    type: "ADDTODO",
    payload: todo,
  };
};

export const toggle = () => {
  return {
    type: "TOGGLE",
  };
};

export const remove = () => {
  return {
    type: "DELETE",
  };
};
