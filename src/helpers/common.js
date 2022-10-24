const querySkip = {
  querySkip: async (page, perPage) => perPage * (page - 1),
};

export { querySkip };
