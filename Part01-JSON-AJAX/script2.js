// create a variable to get the element that has id="btn" named "btn"
var btn = document.getElementById("btn");

// create a variable to get the element that has id="music-inst" named "musicDiv"
var musicDiv = document.getElementById("music-inst");
/*
instead of typing: document.getElementById("music-inst").innerHTML;
we can just type: musicDiv.innerHTML
*/

/* ******************************** Using AJAX ************************************** */
/*
usually in a real world we will load JSON data from a dynamic source:
like from another url source: 
https://anmarjarjees.github.io/json-examples/music-inst.json
*/

// 1. create our object
var xhr = new XMLHttpRequest();

// 2. open the connection with the remote server to get the data as JSON file:
xhr.open('GET', 'https://anmarjarjees.github.io/json-examples/music-inst.json');

// 3. prepare our global variable "data" plus running the major AJAX function:
var data;
xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        // start getting the info:
        // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
        /*
            Remember that "this.responseText" is just a string in JSON format
            it's not a JSON Object
            We need to use JSON.parse() method to convert this string to JSON Object
        */
        data = JSON.parse(this.responseText);
    } else {
        // We can skip else statement
    }
}  // end onreadystatechange function

// 4. send our request by using send() method of XMLHttpRequest object
xhr.send();
// We are done with AJAX code

// ***************************
// Staring the Event Listener
// ***************************
btn.addEventListener("click", function () {
    // We can clear the content of the div (reset):
    musicDiv.innerHTML = "";

    /*
    - Using JS DOM syntax to get an element by its "id" => already DONE :-)
    - using our global variable "data" that contains the received text parsed as JSON
    - then using .innerHTML / .innerText to display the retrieved data into our HTML documents
    */

    // we can output the data just to review its properties (optional):
    console.log(data);

    // Basic Output for one Item:
    // Let's try to display the full information about the first instrument (element) index of 0
    // info: the name, the history, and the specifications (specs)
    // musicDiv.innerText = data[0].name + ", " + data[0].history + ", " + data[0].specs.category[0] + ", " + data[0].specs.category[1] + ", " + data[0].specs.category[2] + ".";

    // Task: first element => display "Concert Grand"
    // console.log(data[0].specs.type[2]); // Concert Grand

    // It's the time to display the full returned info (the full Array of JS object contents)

    // Creating a variable staring with initial value of empty string
    var fullOutput = "";

    // Basic Output for all the main Items (the item in the major array: piano, guitar, ukulele):
    // we will use for loop because we have 3 items (elements) in our data array:
    /*
    for (var i = 0; i < data.length; i++) {
        fullOutput += "<p>" + data[i].name + ", " + data[i].history + ". Types: " + data[i].specs.type + ". Category:" + data[i].specs.category + "</p>";
    }
    */

    // Enhanced Output for all the Items:
    // for testing let's console log the arrays of the first element:
    // console.log(data[0].specs.type); // (3) ["Baby Grand", "Parlor Grand", "Concert Grand"]
    /*
    type: Array(3)
    0: "Baby Grand"
    1: "Parlor Grand"
    2: "Concert Grand"
    */
    // console.log(data[0].specs.category); // (3) ["61 keys", "76 keys", "88 keys"]
    /*
    Array(3)
    0: "61 keys"
    1: "76 keys"
    2: "88 keys"
    */

    for (var i = 0; i < data.length; i++) {
        fullOutput += "<p>" + data[i].name + ", " + data[i].history + ". Types: ";

        for (var j = 0; j < data[i].specs.type.length; j++) {
            // index: 0, 1, 2
            // specs.type.length-1 => to get the last index instead of hard coding "2"
            if (j != data[i].specs.type.length - 1) {
                fullOutput += data[i].specs.type[j] + ", ";
            } else {
                fullOutput += " and " + data[i].specs.type[j] + ".";
            }
        }  // end of the second loop for "type" array

        fullOutput += " The categories: ";
        for (var j = 0; j < data[i].specs.category.length; j++) {
            if (j != data[i].specs.category.length - 1) {
                fullOutput += data[i].specs.category[j] + ", ";
            } else {
                fullOutput += " and " + data[i].specs.category[j] + ".";
            }
        }  // end of the second loop for "category" array
        // even if we ignore the following line, 
        // innerHTML will add the closing tag "</p>" automatically
        fullOutput += "</p>";
    } // end of the main loop with index i for "data" array

    // at the very end, below display the full text:
    // We do need to use innerHTML instead of innerText because we have the "p" element
    musicDiv.innerHTML += "<br>";

    for (var i = 0; i < data.length; i++) {
        fullOutput += "<p>" + data[i].name + ", " + data[i].history + ". <br>Types: <ul>";
        for (var j = 0; j < data[i].specs.type.length; j++) {
            fullOutput += "<li>" + data[i].specs.type[j] + "</li>";
        }  // end of the second loop for "type" array

        fullOutput += "</ul> The categories: <ul>";
        for (var j = 0; j < data[i].specs.category.length; j++) {
            fullOutput += "<li>" + data[i].specs.category[j] + "</li>";
        }  // end of the second loop for "category" array
        // even if we ignore the following line, 
        // innerHTML will add the closing tag "</p>" automatically
        fullOutput += "</ul></p><hr>";
    } // end of the main loop with index i for "data" array
    musicDiv.innerHTML += fullOutput;
}); // addEventListener function

/*
data = [ { item1 } , { item2 }, { item2 } ]

[] ==> array symbol
{} ==> object symbol

"name"="Piano"; [Easy]

"specs" = JSON Object
{
    "type": [ array elements ]
    "category": [array elements ]
}
*/

/*
our array of JSON objects
[
    {
        "name": "Piano",
        "history": "very old",
        "specs": {
            "type": [
                "Baby Grand",
                "Parlor Grand",
                "Concert Grand"
            ],
            "category": [
                "61 keys",
                "76 keys",
                "88 keys"
            ]
        }
    },
    {
        "name": "Guitar",
        "history": "old",
        "specs": {
            "type": [
                "Acoustic",
                "Eclectic",
                "Classical"
            ],
            "category": [
                "6 strings",
                "12 strings",
                "8 strings"
            ]
        }
    },
    {
        "name": "Ukulele",
        "history" : "new",
        "specs": {
            "type": [
                "Soprano",
                "Concert",
                "Tenor"
            ],
            "category": [
                "12 Frets",
                "13 Frets",
                "14 Frets"
            ]
        }
    }
]
*/