module.exports = (sequelize, DataTypes) => {
  const DashboardData = sequelize.define(
    'gklms_dashboard_data',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      heading1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return DashboardData
}
