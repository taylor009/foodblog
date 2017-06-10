/**
 * Created by taylor on 6/10/17.
 */
var posts;

getPosts();

function initializeRows() {
    postContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
        rowsToAdd.push(createNewRow(posts[i]));
    }
    postContainer.prepend(rowsToAdd);
}
function getPosts() {
    $.get("/api/posts", function(data) {
        console.log("Posts", data);
        posts = data;
        initializeRows();
    });
}

function insertPost(event) {
    event.preventDefault();
    // if (!newItemInput.val().trim()) {   return; }
    var post = {
        text: newItemInput
            .val()
            .trim(),
        complete: false
    };

    // Posting the new todo, calling getTodos when done
    $.post("/api/posts", post, function() {
        getPosts();
    });
    newItemInput.val("");
}