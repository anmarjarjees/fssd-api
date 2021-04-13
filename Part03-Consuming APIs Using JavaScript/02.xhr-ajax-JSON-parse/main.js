var xhr = new XMLHttpRequest();

/*
After running and testing the code and looking at the console.log() results, 
we can now create a variable to store and manipulate the responseText: 
*/

/*
The variable is created outside the function (inside the main script) to make it Global:
*/
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();

xhr.onreadystatechange = function () {
    // Check if everything has completed and the status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        console.log(this);
        /*
        Notice that this xmlHTTPRequest Object has two identical properties:
        - response
        - responseText
        They both have the same value with the same data type
        We will use "responseText"
        */

        // Comment the innerHTML part to test our code with Console Window
        // document.getElementById("data").innerHTML = this.responseText

        // Adding console.log to check this.responseText:
        console.log(typeof (this.responseText));// String with JSON Format

        // using JSON.parse()
        // this method will convert JSON Object to JavaScript Object
        console.log(typeof (JSON.parse(this.responseText))); // object

        // let's see the data contained in that object:
        // So remove typeof()
        console.log(JSON.parse(this.responseText)); // full JS object content

        // using our Global variable "data":
        data = this.responseText
    }
};
/*
The last console.log() inside the function output (JS Object Not JSON):
{
    people: "https://ci-swapi.herokuapp.com/api/people/",
    planets: "https://ci-swapi.herokuapp.com/api/planets/",
    films: "https://ci-swapi.herokuapp.com/api/films/",
    species: "https://ci-swapi.herokuapp.com/api/species/",
    vehicles: "https://ci-swapi.herokuapp.com/api/vehicles/",
}
*/

/*
In the result above is inside console window, 
we can expand the little node, 
we can see each of the properties and the values associated with those properties inside the console.
*/

// using console.log() to output data varaible:
console.log(data); // undefined ???? Check the next folder to see why?