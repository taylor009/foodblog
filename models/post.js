/**
 * Created by taylor on 6/7/17.
 */
module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Post;
};