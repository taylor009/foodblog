/**
 * Created by taylor on 6/7/17.
 */



module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        article: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 1000]
            }
        },
         postDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Post;
};