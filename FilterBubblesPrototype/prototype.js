//console log then ("nameofjspage+message")
console.log("prototype.js ready to roll" )

//------------------------------------------- #sightseeing-----------------------------------------------

// we use the Instagram API
// specifically, we want to get pictures data for a certaing #hashtag
// see https://instagram.com/developer/endpoints/tags/#get_tags_media_recent
var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'sights'
var client_id = 'b0dd44d3bb2549fcb3535414b69bff07'

//// let's build the URL from which data can be loaded
var instagramURL = endpoint + hashtag + "/media/recent?client_id=" + client_id

//var is making a variable, then name it, after the = put your favirable and wrap in ""
//var instagramURL = 'https://api.instagram.com/v1/tags/unhealthy/media/recent?client_id=b0dd44d3bb2549fcb3535414b69bff07'

// we're using jQuery's AJAX function to get data from Instagram
// see http://api.jquery.com/jquery.ajax
$.ajax(
{
	dataType: "jsonp" , // we want JSON data, but we need to state "jsonp" here. Otherwise Instagram would refuse our request, as it comes from a different domain. If you really want to know wtf JSONP is, take a look at https://learn.jquery.com/ajax/working-with-jsonp/
    url: instagramURL, // the url to get data from
    success:handleData // the function to execute once we get data back from Instagram
})

//asking jquery to get json from the URL then when you get data you use the function "handledata"
//$.getJSON( URL ,handledata );

//creating a handledata function that console logs
function handleData(json) //json is data from anywhere, in this case instagram written in javascript, and it can change
{
    console.log(json)

    var pictures = json.data //made a varibale called pictures and in there the data from the object from json. If i wanted the meta i would write json.meta
    //loop through pictures

    var total = pictures.length //how many pictures in the array from json.data, length keyword saying how many items
    var counter = 0 // setting counter to 0, so we want to see all results from 0, we can chnage this
    while (counter < total) // starting the loop, if counter is less then total we will enter loop
    {
    	console.log(counter)// shows the value of counter in console log on the resuts

    	var picture = pictures[counter]//creating a variable called picture the value is the elemtents at thhe position of counter
        
        console.log(picture) // show the object

        var imageURL = picture.images.standard_resolution.url //isolating what we want, finding the url, putting it inside a variable we made called imageURL

        //var imagethumb= picture.images.thumbnail.url

        console.log(imageURL) // show the URL

        var img= '<img src="' + imageURL + '">' //creating a variable called img, putting our imageURL variable inside that, putting it inside <img src=""> means it will come up as in image format not a url

        //var img= '<img src="' + imagethumb + '">'


        $('body').append(img) //append means add on the end, so in this case were adding the images at end of the body of the page, so after whatevers on the page so if there was a H1 it would be after that, Prepend means before so it would be before the H1, showing it on the page

    	//increment counter by 1
    	//counter = counter + 1
    	//counter += 1
    	counter ++ //add one to the counter, to go through the loop again, show other results
    }
}



