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
========================================================================
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
The same as we were able to create an array of simple JS objects in the previous example,
we can also create an array of JSON objects below:
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
To make sure that we have the valid (correct) JSON object,
We can use this online JSON Validator: https://jsonlint.com

NOTE: Please, make sure to:
- Place (write) just the pure JSON data without the variable
- Remove the ; at the end
*/

console.log(theCars); // output the entire array of JSON objects
console.log(typeof (theCars)); // object


// one more example for JSON and array:
// Array of "JSON" objects for our college "CBC":
// Every property (key) in JSON object has to be quoted 
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

// We had to examples of creating an array of JSON objects
// We will try access their values
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

/* 
output: I have [Fiat] model [2010] and it's color is [white].
Notice that the variables are inside [] just for learning not for printing
*/
var fullMsg = "I have " + theCars[1].type + " model " + theCars[1].model + " and it's color is " + theCars[1].color + ".";

// notice that the following code will override the previous one 
document.getElementById("car").innerText = fullMsg;

// Task: Output this message using cbc array of JSON object:
// I am taking the [FSSD] program at CBC, [Toronto] campus.
var fullInfo = "I am taking the " + cbc[0].programs[0] + " program at CBC, " + cbc[0].campus + " campus.";

// Place our content in <p id="college">:
document.getElementById("college").innerText = fullInfo;

// Beside JSON as a format to save our data in a simple text file
// We have XML (eXtensible Markup Language) 
// which is also another format to save our data in a simple text file (Old Fashion Way)
// It's a markup language that has elements with opening and closing tags
// But we can create our own elements:

// Example: Create information for employees with the following fields:
// first_name, last_name, job_title

// 1) Below is an array of JSON
var employees = [
    {
        "first_name": "Martin",
        "last_name": "Smith",
        "job_title": "Web Developer"
    },
    {
        "first_name": "Sarah",
        "last_name": "Grayson",
        "job_title": "Graphic Designer"
    },
    {
        "first_name": "Alex",
        "last_name": "Chow",
        "job_title": "DB Admin"
    }
];

console.log(typeof (employees));

// Make/build it as an XML:
// XML is like HTML but with custom elements (created by the programmer):
// the code below should be written in separate file with .xml extension
/*
<employees>
    <employee emp_id="1">
        <first_name>Martin</first_name>
        <last_name>Smith</last_name>
        <job_title>Web Developer</job_title>
    </employee>
    <employee emp_id="2">
        <first_name>Sarah</first_name>
        <last_name>Grayson</last_name>
        <job_title>Graphic Designer</job_title>
    </employee>
    <employee emp_id="3">
        <first_name>Alex</first_name>
        <last_name>Chow</last_name>
        <job_title>DB Admin</job_title>
    </employee>
</employees>
*/