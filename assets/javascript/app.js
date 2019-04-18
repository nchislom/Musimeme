// Globals
var topics = ['trumpet', 'synthesizer', 'clarinet', 'violin', 'saxophone', 'tabla', 'lute', 'cello', 'drums', 'bass'];
var apiKey = "0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK";
var currentOffset = 10;
var currentTopic = "";
// GIF GENERATOR
var generateGifs = function(object, appendMore) {

    // Empty div before appending new elements
    if(!appendMore){
        $("#images").empty();
    } else if(appendMore){
        $("#more-button-p").remove();
    }

    // Gif generation loop
    for(let i = 0; i<object.data.length; i++) {
        
        let newCard = $("<div>").attr({
            "class": "card col-sm-2",
            "style": "5rem"
        });

        let newImage = $("<img>").attr({
            "src": object.data[i].images.fixed_height_small_still.url,
            "class": "gif card-img-top",
            "alt": object.data[i].title,
            "data-state": "still",
            "data-still": object.data[i].images.fixed_height_small_still.url,
            "data-animate": object.data[i].images.fixed_height_small.url
        });

        let newCardBodyDiv = $("<div>").attr("class", "card-body");
        
        let newCardBodyP = $("<p>").attr("class", "card-text")
        .text("Rating: " + object.data[i].rating);

        newCardBodyDiv.append(newCardBodyP);
        newCard.append(newImage);
        newCard.append(newCardBodyDiv);
        $("#images").append(newCard);
    }

    $("#images").append($("<p>").attr("id", "more-button-p"));
    $("#more-button-p").append($("<button>").attr({
            "type": "button",
            "id": "more-button",
            "class": "btn btn-success more-button centered"
        }).text("Get More Pictures!"));

    // GIF CLICK EVENT HANDLER
    $(".gif").on("click", function() {
        let state = $(this).attr("data-state");
        if(state === "still"){
            $(this).attr("data-state", "animate");
            $(this).attr("src", $(this).attr("data-animate"));
        } else {
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"));
        }
    });

    // MORE BUTTON CLICK EVENT HANDLER
    $(".more-button").on("click", function(){
        let queryURL = getURL(currentTopic, currentOffset);
        // Ajax GET method
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(jsonData){
            generateGifs(jsonData, true);
        });
        currentOffset += 10;
    });

}

// QUERY URL GENERATOR
var getURL = function(searchTerm, offset){
    
    // Base URL
    let URL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=";
    
    URL += searchTerm.replace(/ /g, '+');           // Append searchTerm, replacing spaces with +'s
    URL += "&limit=10";                             // Append search Result Size
    if(offset){ URL += "&offset=" + offset; }       // Append offset of search results if requested
    URL += "&rating=G";                             // Append rating
    URL += "&lang=en";                              // Append language result filter
    return URL;
}

// BUTTON GENERATOR
var generateButtons = function(){
    $("#buttons").empty();
    for(let i=0; i<topics.length; i++){
        let newButton = $("<button>").attr({
            "type": "button",
            "class": "btn btn-info",
            "data-topic": topics[i]
        })
        .text(topics[i])
        .appendTo("#buttons");
    }

    // BUTTON CLICK EVENT HANDLER
    $(".btn-info").on("click", function(){
        currentTopic = $(this).attr("data-topic");
        let queryURL = getURL($(this).attr("data-topic"));
        // Ajax GET method
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(jsonData){
            generateGifs(jsonData);
        });
    });
}

// SUBMIT BUTTON HANDLER
$("#submit").on("click", function(){
    let newTopic = $("#search-box").val();
    if(!topics.includes(newTopic) && newTopic != ""){
        topics.push($("#search-box").val().trim());
        generateButtons();
    }

    //Clear value from text box once submitted by user
    $("#search-box").val("");
});


// Generate intial 10 butttons when page loadss
generateButtons();