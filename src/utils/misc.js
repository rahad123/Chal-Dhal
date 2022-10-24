const misc = {
  keySort: (obj) => {
    const keys = Object.keys(obj).sort();
    let sortedObj = {};
    for (let i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  },
  toJsObject: async (input) => {
    return JSON.parse(JSON.stringify(input));
  },
};

export { misc };
