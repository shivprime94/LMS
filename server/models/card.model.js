module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    'cards',
    {
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return Card
}
