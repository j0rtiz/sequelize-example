const { errorHandler } = require("../utils/error");
const { User } = require("../models");

module.exports = {
  createUser: async (data) => {
    try {
      return await User.create(data);
    } catch (error) {
      throw errorHandler(error);
    }
  },
};
