module.exports = (sequelize, DataTypes) => {
  const GKLMSVideoPost = sequelize.define(
    'gklms_video_posts',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      post_id: {
        type: DataTypes.INTEGER,
      },
      post_slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topic_slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cat_slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ChaptRef: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_type: {
        type: DataTypes.ENUM(['video', 'post']),
        defaultValue: 'post',
      },
      video_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      video_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_updated: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
  return GKLMSVideoPost
}

/* id int AI PK 
post_id int 
post_slug varchar(250) 
topic_slug varchar(250) 
cat_slug varchar(250) 
ChaptRef varchar(50) 
post_type enum('video','post') 
video_id varchar(15) 
video_time varchar(10) 
last_updated varchar(250) 
notes varchar(1000)
*/
