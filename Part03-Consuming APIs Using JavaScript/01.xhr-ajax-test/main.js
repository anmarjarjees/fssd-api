/*
This XMLHttpRequest object is an built-in object that JavaScript provides to allow us to consume APIs.

XML: stands for Extensible Markup Language, which is similar to HTML in the way it structures its data, and it's a precursor to JSON.

XMLHttpRequest object: gives us the method:
- to open connections 
- to send connections
- and close them
*/

/*
The very first thing that we do on is to create a new instance of the XMLHttpRequest object.
*/
var xhr = new XMLHttpRequest();

/*
we need to open a connection:
using open() method of XMLHttpRequest object: 
xhr.open().

.open() method has:
1- First argument either "GET" method or "POST" method

There are several different methods that we can use to communicate with a web server. The two that you're going to use most often are GET and POST.

* GET method: is used when we're retrieving data from the server.
This is a standard one that a browser uses when retrieving a web page.

* POST method: is used when we're sending data to the server, such as an uploaded file or form data.

Since in this instance we want to retrieve data from the Star Wars API, then we're going to use the GET method.

2. The second argument is the URL that we want to retrieve. so we are making a request to Star Wars API that we need to send later in the next line
*/

// The Base URL for swapi is: https://ci-swapi.herokuapp.com/api/
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

// Then we do xhr.send() to send the request
xhr.send();

/*
create a new function: xhr.onreadystatechange():
Whenever the state changes of our xhr object, we want to run a check.

The xhr object maintains an internal state as it's completing various parts of our request operation.

Now that we have this listener waiting to see for xhr's state to change:

First Check: "readyState == 4" means that the operation has been completed.

if you google "xhr readystate"
in the Mozilla Developer Network, we have some documentation:

Value	State	Description
0	    UNSENT	Client has been created. open() not called yet.
1	    OPENED	open() has been called.
2	    HEADERS_RECEIVED send() has been called, and headers and     status are available.
3	    LOADING	Downloading; responseText holds partial data.
4	    DONE	The operation is complete.

Second Check: "this.status == 200" HTTP status code. 200 means "OK"

We have 6 common HTTP Status Codes:
200: Standard response for successful HTTP requests

301: Moved Permanently, resource has been moved to a different URL

401: Unauthorized Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided

403 Forbidden, The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).

404: The requested resource could not be found but may be available in the future. The page you're looking for does not exist at this location

500:  Internal Server Error, a generic error message, given when an unexpected condition was encountered and no more specific message is suitable. Something has gone wrong on the server
*/

// console.log(document.title);

xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        // Adding console.log to check this.responseText:
        console.log(typeof (this.responseText)); // string

        /*
        - Using JS DOM syntax to get an element by its "id"
        - then using .innerHTML to the "responseText" that comes back from our xhr object

        The code below will display a string in JSON Format
        */
        document.getElementById("data").innerHTML = this.responseText;
    }
} // end onreadystatechange


/*
the next step is to parse that JSON to make it a little bit more understandable for our user.
*/

/*
After running the code we will see that we have this JSON object that's been put inside our div:

{
    "people": "https://ci-swapi.herokuapp.com/api/people/",
    "planets": "https://ci-swapi.herokuapp.com/api/planets/",
    "films": "https://ci-swapi.herokuapp.com/api/films/",
    "species": "https://ci-swapi.herokuapp.com/api/species/",
    "vehicles": "https://ci-swapi.herokuapp.com/api/vehicles/",
    "starships": "https://ci-swapi.herokuapp.com/api/starships/"
}
*/

