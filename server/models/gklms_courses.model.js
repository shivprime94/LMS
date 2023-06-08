module.exports = (sequelize, DataTypes) => {
  const GKLMSCourse = sequelize.define(
    'gklms_courses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sub_id: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SubChapt: {
        type: DataTypes.ENUM(['Yes', 'No']),
      },
      society: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      page_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return GKLMSCourse
}

/* sub_id varchar(50) 
code varchar(10) 
name varchar(100) 
sub_slug varchar(20) 
SubChapt enum('Yes','No') 
society varchar(3) 
details varchar(300) 
page_link varchar(100)
*/
