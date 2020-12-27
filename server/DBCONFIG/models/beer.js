module.exports = (sequelize, Sequelize) => {
  const Beer = sequelize.define("Beer", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tagline: {
      type: Sequelize.STRING,
    },
    first_brewed: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Beer;
};
