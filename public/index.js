$(async function() {

    const apiUrl = "https://instaapi-born.herokuapp.com/api/posts";

    try {
        const response = await axios.get(apiUrl)
        console.log(response);
        $("#posts").empty();
        for (const postid in response.data.data) {
            const post = response.data.data[postid];
            let row = `<tr>
                    <td scope="row">${post.shortcode}</td>
                    <td>${post.full_name}</td>
                </tr> `;
            $("#posts").append(row);
        }
    } catch (error) {
        console.log(error);
    }



    // $.get(apiUrl, function(data, status) {

    //     console.log(data);

    //     $("#posts").empty();
    //     for (const postid in data.data) {
    //         const post = data.data[postid];
    //         let row = `<tr>
    //                         <td scope="row">${post.shortcode}</td>
    //                         <td>${post.full_name}</td>
    //                     </tr> `;
    //         $("#posts").append(row);
    //     }

    // });


})