export const ADDTODO = "ADDTODO";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";
export const DELETEALL = "DELETEALL";

export const add = (payload) => {
  return {
    type: ADDTODO,
    payload,
  };
};

export const toggle = (payload) => {
  return {
    type: TOGGLE,
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const deleteAll = () => {
  return {
    type: DELETEALL,
  };
};
