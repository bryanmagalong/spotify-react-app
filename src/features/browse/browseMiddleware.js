const browseMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default browseMiddleware;
