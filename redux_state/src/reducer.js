export const YNreducer = (state, {type, payload}) => {
  if (type === "updateUser") {
    return {
      ...state,
      user: {
        ...state.user,
        ...payload,
      },
    };
  } else return state;
};
