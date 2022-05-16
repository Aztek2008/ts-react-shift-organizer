module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    userId: {
      type: Sequelize.STRING,
    },
    userName: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
