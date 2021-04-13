/*
Important Note about file extensions:
XML Document (file): file-name.xml
JSON Document (file): file-name.json
*/

/* ********************************************************************** */
/* ********************************************************************** */
/* *************************** Using AJAX ******************************* */
/*
What is AJAX?
AJAX = Asynchronous JavaScript And XML.
AJAX is not a programming language.

AJAX just uses a combination of:
- A browser built-in "XMLHttpRequest" object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

With AJAX you can:
Read data from a web server - after the page has loaded
Update a web page without reloading the page
Send data to a web server - in the background
Best Example of AJAX: Google Map

NOTE: We will not xml, we will use JSON format


XMLHttpRequest object:
The XMLHttpRequest object can be used to exchange data with a web server
behind the scenes.
This means that it is possible to update parts of a web page,
without reloading the whole page.
*/

/*
Review:
Examples of browser object "window":
The browser object has the following methods:
window.alert("test");
window.prompt("How are you:");
window.document.write("");

the object "window" so we don't have to specify it:
alert("test");
prompt("How are you:");
document.write("");
*/

// We will use JavaScript and AJAX to receive and load JSON files on the fly
/*
Usually in a real world we will load JSON data from a dynamic source:
like from another url sources.
in this example I will use this:

The Base URL for the instrument information json file is:
https://anmarjarjees.github.io/json-examples/music-inst.json
*/

/*
- I have created a JSON file named "music-inst.json"
- This file is saved in my GitHub Repo (GitHup Pages) as shown above in the link
- The contents of this file is array of object (Valid JSON Format):

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
        "history": "new",
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
];
*/

// We have the required information with the BASE URL for the DATA:

/*
MS VS Code Hint:
Use XMLHttpRequest (XHR) objects to interact with servers. 
You can retrieve data from a URL without having to do a full page refresh.
This enables a Web page to update just part of a page without disrupting 
what the user is doing.
*/

/*
The very first thing is to create a new instance of the XMLHttpRequest object.
*/

var xhr = new XMLHttpRequest(); // This will download JSON not XML! Yes :-)
// the same idea: var myArray = new Array();
// testing
console.log(xhr);

/*
we need to open a connection:
using open() method of XMLHttpRequest object: 
xhr.open().

The two methods that you're going to use most often are "GET" and "POST":
* GET method (Receive Data): is used when we're retrieving data from the server.
This is a standard one that a browser users use when retrieving a web page.

* POST method (Send Data): is used when we're sending data to the server, 
such as an uploaded file or sending form data.

Since in this instance we want to retrieve data from other resource, 
then we're going to use the GET method.

.open() method has two arguments/parameters:
1- First argument "GET" method
There are several different methods that we can use to communicate with a web server. 

2. The second argument is the URL that we want to retrieve. 
so we are making a request to anmarjarjees.github.io API 
that we need to send later in the next line
*/

/*
Base URL
The Base URL is the root URL for all of the API, 
The Base URL for my json data (anmarjarjees.github.io API) is:
https://anmarjarjees.github.io/json-examples/music-inst.json
Or I can use this link:
https://anmarjarjees.github.io/json-api/music-inst.json

To summarize:
- Create a new repo (public)
- Upload your JSON file to this repo
- Make it as GitHub Pages
- Use the link of the repo for API request
*/

// getting data from the server (GitHub server):
// I had to write the full path: the repo and the file name
// let url = 'https://anmarjarjees.github.io/json-examples/music-inst.json'
// Or using:
let url = 'https://anmarjarjees.github.io/json-api/music-inst.json'

xhr.open('GET', url);
// Or:
// xhr.open('GET', 'https://anmarjarjees.github.io/json-examples/music-inst.json');


/*
create a new function: xhr.onreadystatechange():
Whenever the state changes of our xhr object, we want to run a check.

The xhr object maintains an internal state as it's completing various parts of our request operation.

Now that we have this listener waiting to see for xhr's state to change:

******************************************************************
Two Things to check: using two properties of XMLHttpRequest object:
- readyState
- status
*******************************************************************

First Check:
************
(if condition): "readyState == 4" means that the operation has been completed.

if you google "xhr readystate"
in the Mozilla Developer Network, we have some documentation:

Value	State	Description
0	    UNSENT	Client has been created. open() not called yet.
1	    OPENED	open() has been called.
2	    HEADERS_RECEIVED send() has been called, and headers and status are available.
3	    LOADING	Downloading; responseText holds partial data.
4*	    DONE	The operation is complete.

MDN: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState


Second Check:
*************
(if condition): "status==200" means it's a successful request

We have 6 common HTTP Status Codes:
200:* Standard response for successful HTTP requests (No Problems)

301: Moved Permanently, resource has been moved to a different URL

401: Unauthorized Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided

403: Forbidden, The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).

404: The requested resource could not be found but may be available in the future. The page you're looking for does not exist at this location

500:  Internal Server Error, a generic error message, given when an unexpected condition was encountered and no more specific message is suitable. Something has gone wrong on the server
*/

/*
Creating a new variable named "data":
The variable is created outside any function (inside the main script) 
to make it "Global" so we can access (print) its value anywhere inside our script:
*/
var data;
xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    // using the keyword "this" to refer to this object "xhr"
    if (this.readyState == 4 && this.status == 200) {
        // To see what are the properties and methods that comes with this object "xhr"
        // console.log(this); // will output the full object members 
        // console.log(typeof (this)); // object

        // do our code here to grab the data (JSON format)
        // alert("connection is ok and the required file is exist");
        // let's try console:
        // console.log("Everything is OK!");

        // AJAX returns to us "responseText" property: ==> this.responseText
        // adding console.log to test:
        console.log(this.responseText); // output the entire content of "music-inst.json"

        // Adding console.log again to check the type of  this.responseText:
        // in JS typeof(): string, number, boolean, object ==> output a string
        // console.log(typeof (this.responseText)); // string (text)
        /*
        NOTE:
        please remember although "data" looks like array of JSON objects
        but it's not, it's just a "string"
        */
        console.log(this.responseText[0]); // [ !!!!!
        console.log("I like " + this.response[0]); // I like [
        /*
        The reason why: 
        - The web browser can't recognize it as JSON Object 
        - The browser read it as a simple text (that's why it's string) by default
        - so the first character in this string is just "["
        */

        /*
        Problem:
        We need to convert (parse) this string of JSON format
        to an object of JSON format

        Solution:
        Use the JavaScript function JSON.parse() 
        to convert text into a JavaScript object!

        NOTE (HINT):
        A common use of JSON is to exchange data to/from a web server.
        When receiving data from a web server, the data is always a string.
        Parse the data with JSON.parse(), and the data becomes a JavaScript object.

        JSON.pars(parameter);
        parameter (text value): has to be a valid JSON string
        - Converts a JavaScript Object Notation (JSON) string into an object.
        */
        data = JSON.parse(this.responseText);
        console.log("data inside function :" + data); // out the object content: (3) [{…}, {…}, {…}]
        console.log(typeof (data)); // object (array is an object)
        console.log(data[0]); // {name: "Piano", history: "very old", specs: {…}}
        console.log("I like " + data[0].name);
    } else {
        // alert("Error in connection or still loading!");
        console.log("Still loading (very short delay) or something went wrong!");
    }
} // end onreadystatechange function

// the last step: 
// we have to send our request by using send() method of XMLHttpRequest object
xhr.send();

// printing our data outside the function
// Notice that the browser will run this sentence while trying to connect at the same time!
// because there will a very short delay till we get "readyState" to be 4
// the following console.log statement will already executed
console.log("data outside function :" + data); // data outside function :undefined// undefined // output the string not undefined!!!!!, why because there is a delay
// General basic Note about JS:
// if you output "data" => "undefined" (it has no value)
// if "data" is not declared / has no value => Red error data is "not defined"

/*
To fix the issue with the delay:
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
Tip: 1000 ms = 1 second.
Tip: The function is only executed once. If you need to repeat execution,

setTimeout(param1,param2);
- param1 => our anonymous function (self invoking function)
- param2 => the time to wait before running the function

You can learn more:
https://www.w3schools.com/jsref/met_win_settimeout.asp

W3Schools Example:
setTimeout(function(){ alert("Hello"); }, 3000);

*/

// The code below will run after one second
setTimeout(function () {
    // this console.log will be run after 1000 MSC = 1 Second
    console.log("data with setTimeout :" + data);

    // Just for learning:
    // let's try to display the "data" array value to the client
    // Notice that this code will override the page content
    // in the next example, we will format them nicely
    for (let i = 0; i < data.length; i++) {
        document.write("<br>" + data[i].name);
        document.write("<br>" + data[i].history);
        // based on the JSON file, we have the property "specs":
        // this property "specs" has two properties:
        // - type => an array of 3 elements
        // - category => an array of 3 elements
        document.write("<br>" + data[i].specs.type);
        document.write("<br>" + data[i].specs.category);
    }
}, 1000); // we put one second of delay



