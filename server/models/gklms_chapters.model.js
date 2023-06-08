module.exports = (sequelize, DataTypes) => {
  const GKLMSChapter = sequelize.define(
    'gklms_chapters',
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ChaptSlug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ChaptName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SubRef: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return GKLMSChapter
}
/*Id int PK 
ChaptSlug varchar(50) 
ChaptName varchar(200) 
SubRef varchar(50) 
Status tinyint(1) */
