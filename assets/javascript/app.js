// Globals
var topics = ['guitar', 'synthesizer', 'clarinet', 'violin', 'flute', 'tabla', 'lute', 'cello', 'drums', 'bass'];
var apiKey = "0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK";

// GIF Generation Function
var generateGifs = function(object) {
    for(var i = 0; i<object.data.length; i++) {
        
        var newCard = $("<div>").attr({
            "class": "card col-sm-2",
            "style": "5rem"
        });

        var newImage = $("<img>").attr({
            "src": object.data[i].images.fixed_height_small_still.url,
            "class": "gif card-img-top",
            "alt": object.data[i].title,
            "data-state": "still",
            "data-still": object.data[i].images.fixed_height_small_still.url,
            "data-animate": object.data[i].images.fixed_height_small.url
        });

        var newCardBodyDiv = $("<div>").attr("class", "card-body");
        
        var newCardBodyP = $("<p>").attr("class", "card-text")
        .text("Rating: " + object.data[i].rating);

        newCardBodyDiv.append(newCardBodyP);
        newCard.append(newImage);
        newCard.append(newCardBodyDiv);
        $("#images").append(newCard);
    }

    // GIF CLICK EVENT HANDLER
    $(".gif").on("click", function() {
        console.log("Gif clicked!");
        var state = $(this).attr("data-state");
        if(state === "still"){
            $(this).attr("data-state", "animate");
            $(this).attr("src", $(this).attr("data-animate"));
        } else {
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"));
        }
    });

}

// QUERY URL GENERATOR
var getURL = function(searchTerm){
    
    // Base URL
    var URL = "https://api.giphy.com/v1/gifs/search?api_key=0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK&q=";
    
    URL += searchTerm.replace(/ /g, '+');           // Append searchTerm, replacing spaces with +'s
    URL += "&limit=10";                             // Append search Result Size
    URL += "rating=G";                              // Append rating
    URL += "&lang=en";                              // Append language result filter
    return URL;
}

// BUTTON GENERATOR
var generateButtons = function(){
    $("#buttons").empty();
    for(var i=0; i<topics.length; i++){
        var newButton = $("<button>").attr({
            "type": "button",
            "class": "btn btn-info",
            "data-topic": topics[i]
        })
        .text(topics[i])
        .appendTo("#buttons");
    }

    // BUTTON CLICK EVENT HANDLER
    $(".btn-info").on("click", function(){
        console.log("Topic button clicked!");
        var queryURL = getURL($(this).attr("data-topic"));
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(jsonData){
            generateGifs(jsonData);
        });
    });
}

// SUBMIT BUTTON
$("#submit").on("click", function(){
    var newTopic = $("#search-box").val();
    if(!topics.includes(newTopic) && newTopic != ""){
        topics.push($("#search-box").val().trim());
        generateButtons();
    }
});


// Generate intial 10 butttons
generateButtons();