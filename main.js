// Global Variables

//List of topics
var topics = ["Elon Musk","The Dude", "Sam Elliot", "Futurama", "Dude Jesus", "Dude Donny" ];

// api url 



$(document).ready(function() {    

    function displayGifs() {

        $("gif-here-please").empty();
        $("btn-this").empty();

        topics.forEach(function (t, i) {
        
        var bttn = $("<button>");
        $(bttn).attr("type", "button")
        $(bttn).addClass("btn btn-dark")
        $(bttn).text(t);
        $("#btn-this").append(bttn);
    });
        
        var topic = $(this).attr("data-name");
        var giphyAPIURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=LBKqXQtATMKe7aEl5Safxnj4nlHX6uI6";

    $.ajax({
        url: giphyAPIURL,
        method: "GET"
      }).then(function(response) {

        var divItem = $("<div class='carousel-item active'>");
        var divImage = $("<img class='d-block w-100'>");
        // var
        $(divImage).attr('src', )
        $(divItem).append(divImage);
        $("#gif-here-please").append(divItem);




        console.log(response);
        

    
    });
};

$("#find-character").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#character-input").val().trim();

    // Adding movie from the textbox to our array
    topics.push(topic);

    // render the gifs
    $("#btn-this").empty();
    displayGifs();
  });
  displayGifs();



});


