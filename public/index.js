$(async function() {

    const apiUrl = "https://instaapi-born.herokuapp.com/api/posts";

    try {
        const response = await axios.get(apiUrl)
            //console.log(response);
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


    try {
        const response = await axios.get(apiUrl)
            //console.log(response);


        $('#buttonSrcID').click(function() {
            $('#Src').empty();
            const id = $('#SrcID').val();
            const post = response.data.data[id - 1];
            console.log(id);
            console.log(post);
            let row = `<tr>
                        <td scope="row">${post.id}</td>
                        <td>${post.shortcode}</td>
                        <td>${post.full_name}</td>
                       </tr> `;
            $("#Src").append(row);
        })
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await axios.get(apiUrl)
            //console.log(response);


        $('#buttonSrcSC').click(function() {
            $('#Src').empty();
            const id = $('#SrcShortcode').val();
            for (const postid in response.data.data) {
                const post = response.data.data[postid];
                if (post.shortcode == id) {
                    let row = `<tr>
                                <td scope="row">${post.id}</td>
                                <td>${post.shortcode}</td>
                                <td>${post.full_name}</td>
                               </tr> `;
                    $("#Src").append(row);
                }
            }
        })
    } catch (error) {
        console.log(error);
    }


})