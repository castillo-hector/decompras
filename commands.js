const tools = () => {
  return {
    init: {
      1: "$express --view=pug",
      2: "$npm clean-install",
      3: "$DEBUG=decompras:* npm start",
      4: "npm install -g nodemon",
    },
  };
};

return tools;
