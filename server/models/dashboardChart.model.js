module.exports = (sequelize, DataTypes) => {
  const DashboardChart = sequelize.define(
    'gklms_dashboard_chart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return DashboardChart
}
