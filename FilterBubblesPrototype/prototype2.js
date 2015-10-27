console.log("prototype2.js ready to roll" )

var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'sightseeing'
var client_id = 'b0dd44d3bb2549fcb3535414b69bff07'


var instagramURL = endpoint + hashtag + "/media/recent?client_id=" + client_id


$.ajax(
{
    dataType: "jsonp" , 
    url: instagramURL, 
    success:handleData 
})


function handleData(json) 
{
    console.log(json)

    var pictures = json.data 

    var total = pictures.length 
    var counter = 0 
    while (counter < total) 
    {
        console.log(counter)

        var picture = pictures[counter]
        
        console.log(picture) 

        var imageURL = picture.images.standard_resolution.url 


        console.log(imageURL) 

        var img= '<img src="' + imageURL + '">' 


        $('body').append(img) 

        counter ++ 
    }
}