$(function() {

    const apiUrl = "https://instaapi-born.herokuapp.com/api/posts";

    $.get(apiUrl, function(data, status) {

        console.log(data);

    });


})