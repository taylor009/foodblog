/**
 * Created by taylor on 6/7/17.
 */
module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        postID: {
            AUTO_INCREMENT: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        article: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Post;
};