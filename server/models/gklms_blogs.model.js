module.exports = (sequelize, DataTypes) => {
  const GKLMSBlogs = sequelize.define(
    'gklms_blogs',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short_desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      long_Desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return GKLMSBlogs
}
