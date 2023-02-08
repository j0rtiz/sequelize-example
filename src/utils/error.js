module.exports = {
  errorHandler: (e) => {
    const error = new Error();

    if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(e.name)) {
      return Object.assign(error, { message: e.errors.map(({ message }) => message).join(" and "), status: 400 });
    }

    if (["SequelizeDatabaseError"].includes(e.name)) {
      return Object.assign(error, { message: e.original.message, status: 404 });
    }

    return Object.assign(error, { message: e.message, status: 500 });
  },
};
