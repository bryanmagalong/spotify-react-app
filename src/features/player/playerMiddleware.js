const playerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default playerMiddleware;
