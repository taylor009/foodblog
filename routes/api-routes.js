/**
 * Created by taylor on 6/7/17.
 */
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/posts", function(req, res) {

    });

    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/posts", function(req, res) {

    });

    // DELETE route for deleting todos. You can access the todo's id in req.params.id
    app.delete("/api/posts/:id", function(req, res) {

    });

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/posts", function(req, res) {

    });
};