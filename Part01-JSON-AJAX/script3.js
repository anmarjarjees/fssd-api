/* ******************************** Using AJAX ************************************** */
/*
Usually in a real world we will load JSON data from a dynamic source:
like from another url source:
https://anmarjarjees.github.io/json-examples/music-inst.json
Or use this link:
https://anmarjarjees.github.io/json-api/music-inst.json
*/

// 1. create our object
var xhr = new XMLHttpRequest();

// 2. open the connection with the remote server to get the data as JSON file:
xhr.open('GET', 'https://anmarjarjees.github.io/json-api/music-inst.json');

// 3. prepare our global variable "data" plus running the major AJAX function:
var data;
xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        // start getting the info:

        // Use the JavaScript function JSON.parse()
        // to convert text/string into a JavaScript object:
        /*
            Remember that "this.responseText" is just a string in JSON format
            it's not a JSON Object
            We need to use JSON.parse() method to convert this string to JSON Object
        */
        data = JSON.parse(this.responseText);
        // for testing
        console.log(data); // (3) [{…}, {…}, {…}]
        /*
            [] ==> array symbol
            {} ==> object symbol    
        
            data = [ { item1 } , { item2 }, { item2 } ]

            item1 object => piano instrument 
            item2 object => guitar instrument
            item3 object => ukulele instrument

            Each item has 3 properties:
            1- name: piano, guitar, or ukulele 
            2- history: new, old, or very old
            3- specs: { prop1, prop2 } <= JSON object that contains two properties of type array!
            --- prop1: is an array named "type" that contains 3 elements
            --- prop2: is an array named "category" that contains 3 elements

          
            "name"="Piano"; [Easy]

            "specs" = JSON Object
            {
                "type": [ array elements ]
                "category": [array elements ]
            }
        */
    } else {
        // We can skip else statement
        // for testing
        // alert(this.readyState);
        // the alert message will be displayed two times:
        // 2 then 3
    }
}  // end onreadystatechange function

// 4. send our request by using send() method of XMLHttpRequest object
xhr.send();

// We are done with AJAX code :-)


// create a variable to get the element that has id="btn" named "btn"
var btn = document.getElementById("btn");
// btn: HTMLElement => HTML Elements are objects
// each object can have properties and methods 


// create a variable to get the element that has id="music-inst" named "musicDiv"
var musicDiv = document.getElementById("music-inst");
/*
instead of typing: document.getElementById("music-inst").innerHTML;
we can just type: musicDiv.innerHTML
*/

// create another variable to get the element that has id="inst-list" named "listDiv"
var listDiv = document.getElementById("inst-list");

// ***************************
// Staring the Event Listener
// ***************************
// You can refer to our JavaScript Fundamental Code Examples
// Or: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
btn.addEventListener("click", function () {
    // testing
    // alert("button clicked!");

    /*
    - Using JS DOM syntax to get an element by its "id" => already DONE :-)
    - using our global variable "data" that contains the received text parsed as JSON
    - then using .innerHTML / .innerText to display the retrieved data into our HTML documents
    */

    // we can output the data just to review its properties (optional):
    console.log(data);

    // Basic Output for one Item:
    // Let's try to display the full information about 
    // the first instrument(element) index of 0
    // info: the name, the history, and the specifications (specs)

    // Task: first element => display "Concert Grand"
    console.log(data[0].specs.type[2]); // Concert Grand


    // Notice that the following 3 innerText will not be seen in the page (Just for initial practising):

    // We used index 0 for "piano"
    musicDiv.innerText = data[0].name + ", " + data[0].history + ", " + data[0].specs.category[0] + ", " + data[0].specs.category[1] + ", " + data[0].specs.category[2] + ".";

    // index 1 for the "Guitar"
    musicDiv.innerText = data[1].name + ", " + data[1].history + ", " + data[1].specs.category[0] + ", " + data[1].specs.category[1] + ", " + data[1].specs.category[2] + ".";

    // index 2 for the third/last element "Ukulele"
    /*
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
    */
    musicDiv.innerText = data[2].name + ", " + data[2].history + ", " + data[2].specs.type[0] + ", " + data[2].specs.type[1] + ", " + data[2].specs.type[2];


    // It's the time to display the full returned info (the full Array of JS object contents) for our clients

    // Creating a variable staring with initial value of empty string
    var fullOutput = "";
    // Basic Output for all the main Items (the item in the major array: piano, guitar, ukulele):
    // we will use for loop because we have 3 items (elements) in our data array:
    /*
    for (var i = 0; i < data.length; i++) {
        fullOutput += "<p>" + data[i].name + ", " + data[i].history + ". Types: " + data[i].specs.type + ". Categories: " + data[i].specs.category + "</p>";
    }
    */

    // Enhanced Output for all the Items:
    // for testing let's console log the arrays of the first element:
    console.log(data[0].specs.type); // (3) ["Baby Grand", "Parlor Grand", "Concert Grand"]
    /*
    type: Array(3)
    0: "Baby Grand"
    1: "Parlor Grand"
    2: "Concert Grand"
    */
    console.log(data[0].specs.category); // (3) ["61 keys", "76 keys", "88 keys"]
    /*
    category: Array(3)
    0: "61 keys"
    1: "76 keys"
    2: "88 keys"
    */

    // Three loops (nested loops)!
    /*
    The first major loop (the main container): will be for the 3 elements inside "data" array:
    - index 0 => piano
    - index 1 => guitar
    - index 2 => ukulele

    The second minor loop (inside the first major loop): for the "type" array =>  type: Array(3)

    The third/last minor loop (inside the first major loop): for the "category" array => category: Array(3)
    */


    // The first major loop (the main container): will be for the 3 elements inside "data" array:
    // when i=0 => the piano instrument
    // when i=1 => the guitar instrument
    // when i=2 => the ukulele instrument
    for (var i = 0; i < data.length; i++) {
        fullOutput += "<p>" + data[i].name + ", " + data[i].history + ". Types: ";

        // The second minor loop (inside the first major loop): for the "type" array =>  type: Array(3)
        // this loop for printing all the instruments types at once
        for (let j = 0; j < data[i].specs.type.length; j++) {
            // we know that j will have the index: 0, 1, 2
            // So we used this condition j !=2

            // to get the last index instead of hard coding "2"
            // we can this formula: the last index of each array will the the array length - 1

            // specs.type.length-1 => to get the last index instead of hard coding "2"
            if (j != data[i].specs.type.length - 1) {
                fullOutput += data[i].specs.type[j] + ", ";
            } else {
                fullOutput += " and " + data[i].specs.type[j] + ". ";
            }
        }  // end of the second loop for "type" array

        fullOutput += "Categories: "
        // The third/last minor loop (inside the first major loop): for the "category" array => category: Array(3)
        for (let j = 0; j < data[i].specs.category.length; j++) {
            if (j != data[i].specs.category.length - 1) {
                fullOutput += data[i].specs.category[j] + ", ";
            } else {
                fullOutput += " and " + data[i].specs.category[j] + ". ";
            }
        } // end of the second loop for "category" array
        // even if we ignore the following line, 
        // innerHTML will add the closing tag "</p>" automatically!
        fullOutput += "</p>";
    }

    // at the very end, below display the full text:
    // We do need to use innerHTML instead of innerText because we have the "p" element
    musicDiv.innerHTML = fullOutput;

    musicDiv.innerHTML += "<hr><hr>";

    // Now we can reset the variable "fullOutput"
    fullOutput = "";
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

    listDiv.innerHTML = fullOutput;
}); // End addEventListener function

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