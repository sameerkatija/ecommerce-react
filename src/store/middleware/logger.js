const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log({ "Type: ": action.type, "Payload: ": action.payload });
  console.log("current State: ", store.getState());

  next(action);

  console.log("next State: ", store.getState());
};

export default loggerMiddleWare;
