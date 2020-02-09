module.exports = {
  apps: [],
  initializeApp: () => {},
  database: () => {
    return {
      ref: () => {
        return {
          on: () => {},
        };
      },
    };
  },
};
