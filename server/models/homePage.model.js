module.exports = (sequelize, DataTypes) => {
  const HomePage = sequelize.define(
    'gklms_home_pages',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      headline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short_desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return HomePage
}
