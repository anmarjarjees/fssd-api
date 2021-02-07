/*
Creating a constant for the base url:
so it will never change
*/
const baseURL = "https://ci-swapi.herokuapp.com/api/";

/*
We are passing the type argument that represents the type of info (button)
We will use the argument of "cb"
"cb" standing for callback, and this will be the function that we parse in.
*/
function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    /*
    The links:
    "https://ci-swapi.herokuapp.com/api/people/"
    "https://ci-swapi.herokuapp.com/api/planets/"
    "https://ci-swapi.herokuapp.com/api/species/"
    "https://ci-swapi.herokuapp.com/api/starships/"
    "https://ci-swapi.herokuapp.com/api/vehicles/"
    "https://ci-swapi.herokuapp.com/api/films/"

    Instead of passing the string: "https://ci-swapi.herokuapp.com/api/"
    We can just pass the constant baseURL + type

    The "type" variable will be: people, planets, or etc... based on the user option button

    And this will append the base URL with the type that we're parsing in, so that could be people, films, vehicles, or species.

    After the type we do need to have a trailing "/" as well after the type, so we'll just put that on.
    */
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            /*
            We're checking to see if:
            our readyState is 4 and the status is equal to 200.

            And at that stage, we're then invoking our callback function that we parsed through as an argument.

            When we use cb below, it's going to run the function that we parse in as a callback.
            */
            cb(JSON.parse(this.responseText));
        }
    };
}

// This is our first initial function to output the info into the console window
// we don't want, because we want to display them in our HTML document
/*
function printDataToConsole(data) {
    console.log(data);
}
*/

/*
Creating a new function called "writeToDocument"
taking one parameter called "type"

which represents the "type" that comes from the API:
So that would be a film, people, starships, vehicles, species, so on.
*/
function writeToDocument(type) {
    // alert(type); // for test OK
    // we can invoke an anonymous function
    getData(type, function (data) {
        console.log(data); // for testing
        document.getElementById("data").innerHTML = data; // object
        // The result will be always: [object Object]
    });
}