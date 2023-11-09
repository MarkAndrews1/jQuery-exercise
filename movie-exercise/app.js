$(document).ready(function() {
    $("#rating-form").submit(function(e) {
        e.preventDefault()
        let title = $("#title").val()
        let rating = $("#rating").val()
        if (rating < 1 || rating > 10) {
            alert("Rating must be 1-10.")
            return;
        }
        $("#title").val("")
        $("#rating").val("")
        updateList(title, rating)
    })

    function updateList(title, rating) {
        console.log("working")
        let newItem = $("<li>You rated " + title + " a " + rating + " out of 10.<button class='remove-btn'>Remove Rating</button></li>")
            $("#rating-list").append(newItem)
        }
    $("#rating-list").on("click", ".remove-btn", function() {
        $(this).closest("li").remove()
    })
})