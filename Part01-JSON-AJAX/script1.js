// JSON Introduction
/*
W3Schools:
JSON: JavaScript Object Notation.
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.

- Since the JSON format is text only, 
it can easily be sent to and from a server, 
and used as a data format by any programming language.

-When exchanging data between a browser and a server, the data can only be text.
-JSON is text, and we can convert any JavaScript object into JSON, 
and send JSON to the server.

-We can also convert any JSON received from the server into JavaScript objects.
-This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

JavaScript <===> JSON

- A JSON object can be stored in its own file, which is basically just a text file with an extension of .json,

Good Point! Google Chrome browser save our favourits / Bookmarks as a JSON file:
You can just view this file "bookmarks": (DON'T Change it)
C:\Users\<YourUserName>\AppData\Local\Google\Chrome\User Data\Default\
Then open the file "bookmarks"
*/

/* 
developer.mozilla.org
JSON Syntax and Structure:
JSON is a string whose format very much resembles JavaScript object literal format. 
You can include the same basic data types inside JSON 
as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals.
*/

// Below is just a pure literal JS object named "car"
var car = {
    // we and add the object members:
    // - Properties: variables declared inside the object
    // - Methods: functions declared inside the object
    type: "Honda",
    model: 2010,
    color: "white"
} // end car object


// Below converting JS Object to JSON Object
// JSON Object Syntax:
// we are saving the JSON into a new variable named "jsonCar"
var jsonCar = {
    "type": "Honda",
    "model": 2010,
    "color": "white"
}

/*
The same as we were able to create an array of simple JS objects,
we can also create an array of JSON objects:
*/
var theCars = [
    {
        "type": "Honda",
        "model": 2019,
        "color": "white"
    },
    {
        "type": "Kia",
        "model": 2012,
        "color": "silver"
    },
    {
        "type": "Fiat",
        "model": 2010,
        "color": "blue"
    },
    {
        "type": "Volvo",
        "model": 2012,
        "color": "red"
    }
];

/*
To make sure that we have the right (correct) JSON object,
We can use this online JSON Validator: https://jsonlint.com

NOTE: Please, make sure to:
- Place (write) just the pure JSON data without the variable
- Remove the ; at the end
*/
console.log(theCars); // output the entire array of JSON objects
console.log(typeof (theCars)); // Object

// one more example for JSON and array:
// Array of JSON objects for our college "CBC":
var cbc = [
    {
        "campus": "Toronto",
        "programs": ["FSSD", "MDM", "DMWD", "APA"]
    },
    {
        "campus": "Mississauga",
        "programs": ["MDM", "DMWD", "APA"]
    },
    {
        "campus": "Scarborough",
        "programs": ["MDM", "PF", "APA"]
    }
];

// get the type (the car's name) value of the first car
// in our array named "theCars" that contains JSON objects:
console.log(theCars[0].type);

// get the model of the second car
console.log(theCars[1].model);

// Let's try to use DOM JS methods:
// output "I have Fiat." => into the p element with id="car"
// use our array "theCars" to get the value of "Fiat"
// objectName.property OR objectName.method()
document.getElementById("car").innerText = "I have " + theCars[2].type + ".";

// notice that the following code will override the previous one 
/* 
output: I have Fiat model 2010 and it's color is white.
*/
var fullMsg = "I have " + theCars[1].type + " model " + theCars[1].model + " and it's color is " + theCars[1].color + ".";
document.getElementById("car").innerText = fullMsg;

// Task: Output I am taking the FSSD program at CBC, Toronto campus.
var fullInfo = "I am taking the " + cbc[0].programs[0] + " program at CBC, " + cbc[0].campus + ".";

// Place our content in <p id="college">:
document.getElementById("college").innerText = fullInfo;

// Beside JSON as a format to save our data in a simple text file
// We have XML (eXtensible Markup Language) 
// which is also another format to save our data in a simple text file (Old Fashion Way)
// It's a markup language that has elements with opening and closing tags
// But we can create our own elements:
// Example:
// Below is an array of JSON
var employees = [
    {
        "name1": "Martin",
        "name2": "Smith",
        "title": "Web Developer"
    },
    {
        "name1": "Sarah",
        "name2": "Grayson",
        "title": "Graphic Designer"
    }];

// Make/build it as an XML:
/*
<employees>
    <employee>
        <name1>Martin</name1>
        <name2>Smith</name2>
        <title>Web Developer</title>
    </employee>
    <employee>
        <name1>Sarah</name1>
        <name2>Grayson</name2>
        <title>Graphic Designer</title>
    </employee>
</employees>
*/

/*
Important Note:
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
- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

With AJAX you can:
Read data from a web server - after the page has loaded
Update a web page without reloading the page
Send data to a web server - in the background

NOTE: We will not xml, we will use JSON format

XMLHttpRequest object: The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Example: As we did with Google Map
*/

/*
Review:
Examples of browser object "window": 
window.alert("test");
window.prompt("How are you:");
window.document.write("");
*/

// We will use JavaScript and AJAX to load these file on the fly
/*
usually in a real world we will load JSON data from a dynamic source:
like from another url sources.
in this example I will use this: 
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

/*
MS VS Code Hint:
Use XMLHttpRequest (XHR) objects to interact with servers. 
You can retrieve data from a URL without having to do a full page refresh.
This enables a Web page to update just part of a page without disrupting 
what the user is doing.
*/
var xhr = new XMLHttpRequest();  // This will download JSON not XML! Yes :-)
/*
we need to open a connection:
using open() method of XMLHttpRequest object: 
xhr.open().

The two methods that you're going to use most often are GET and POST:
* GET method (Receive Data): is used when we're retrieving data from the server.
This is a standard one that a browser users when retrieving a web page.

* POST method (Send Data): is used when we're sending data to the server, such as an uploaded file or sending form data.

Since in this instance we want to retrieve data from other resource, 
then we're going to use the GET method.

.open() method has:
1- First argument "GET" method
There are several different methods that we can use to communicate with a web server. 

2. The second argument is the URL that we want to retrieve. so we are making a request to Star Wars API that we need to send later in the next line
*/

// getting data from the server (GitHub server):
xhr.open('GET', 'https://anmarjarjees.github.io/json-examples/music-inst.json');

/*
create a new function: xhr.onreadystatechange():
Whenever the state changes of our xhr object, we want to run a check.

The xhr object maintains an internal state as it's completing various parts of our request operation.

Now that we have this listener waiting to see for xhr's state to change:

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
4	    DONE	The operation is complete.

Second Check:
*************
(if condition): "status==200" means it's a successful request

We have 6 common HTTP Status Codes:
200: Standard response for successful HTTP requests (No Problems)

301: Moved Permanently, resource has been moved to a different URL

401: Unauthorized Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided

403 Forbidden, The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).

404: The requested resource could not be found but may be available in the future. The page you're looking for does not exist at this location

500:  Internal Server Error, a generic error message, given when an unexpected condition was encountered and no more specific message is suitable. Something has gone wrong on the server
*/

/*
Creating a new variable named "data":
The variable is created outside any function (inside the main script) 
to make it "Global" so we can access (print) its value anywhere inside our script:
*/
var data;
// console.log(data) // if you output "data" => undefined (it has no value)
xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    // using the keyword "this" to refer to this object "xhr"
    if (this.readyState == 4 && this.status == 200) {
        // do our code here to grab the data (JSON format)
        // alert("connection is ok and the required file is exist");
        // let's try console:
        // console.log("Everything is OK!");

        // To see what are the properties and methods that comes with this object "xhr"
        // console.log(this); // will output the full object members 
        // console.log(typeof (this)); // object

        // AJAX returns to us responseText property: ==> this.responseText
        // adding console.log to test:
        // console.log(this.responseText); // output the entire content of "music-inst.json"

        // Adding console.log to check the type of  this.responseText:
        // console.log(typeof (this.responseText)); // in JS: String, Number, Boolean, Object ==> output a string
        // console.log(typeof (this.responseText)); // string

        // We will assign the returned text to our global variable "data"
        // data = this.responseText; // just for learning

        // repeating the console.log for testing
        // console.log(data); // display the content which the full JSON object as a "STRING"
        // console.log(typeof (data)); // string (NOT an object!)
        /* 
        NOTE:
        please remember although "data" looks like array of JSON objects
        but it's not, it's just a "string"
        */
        // console.log("I like " + data[0] + "."); // I like [.
        // console.log("I like " + data[0].name + "."); // I like undefined.
        /*
        The reason why: 
        - The web browser can't recognize it as JSON Object 
        - The browser read it as a simple text (that's why it's string) by default
        - so the first character in this string is just "["
        */

        /*
        A common use of JSON is to exchange data to/from a web server.
        When receiving data from a web server, the data is always a string.
        Parse the data with JSON.parse(), and the data becomes a JavaScript object.

        JSON.pars(parameter);
        parameter (text value): has to be a valid JSON string
        - Converts a JavaScript Object Notation (JSON) string into an object.
        */

        // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

        data = JSON.parse(this.responseText); // or data = JSON.parse(data);
        // console.log(typeof (data)); // object
        console.log(data); // out the object content
    } else {
        // alert("Error in connection or still loading!");
        console.log("Still loading (very short delay) or something went wrong!");
    }
} // end onreadystatechange function

// the last step: 
// we have to send our request by using send() method of XMLHttpRequest object
xhr.send();

// printing our data outside the function
// console.log(data); // the JS Object
// undefined // output the string not undefined!!!!!, why because there is a delay
// General Note: if "data" is not declared/has no value => Red error data is not defined

/*
To fix the issue with the delay:
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
Tip: 1000 ms = 1 second.
Tip: The function is only executed once. If you need to repeat execution,

setTimeout(param1,param2);
- param1 => our anonymous function (self invoking function)
- param2 => the time to wait before running the function
*/
setTimeout(function () {
    // my code:
    console.log(data);
}, 1000); // we put one second of delay

// A simple test/review:
var myArrOfJSON = [
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

// Task: output: "I like Piano." => Take "Piano" from this var "myArrOfJSON"
// console.log("I like Piano.");
// console.log("I like " + myArrOfJSON[0].name + ".");