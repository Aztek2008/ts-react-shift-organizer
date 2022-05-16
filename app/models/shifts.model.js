module.exports = (sequelize, Sequelize) => {
  const Shift = sequelize.define('shifts', {
    startTime: {
      type: Sequelize.STRING,
    },
    endTime: {
      type: Sequelize.STRING,
    },
    reservedBy: {
      type: Sequelize.STRING,
    },
  });
  return Shift;
};
