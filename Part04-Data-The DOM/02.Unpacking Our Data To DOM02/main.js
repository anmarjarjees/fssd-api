const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    /*
    Creating a variable called "el", short for element for storing our data ID in there.
    */
    var el = document.getElementById("data");

    /*
    And then every time the button is clicked, 
    we will set the innerHTML of our element to an empty string.

    to make sure that every time we click, JS will clear the previous text from the div#data
    and display the new results
    */
    el.innerHTML = ""; // will clear the content of this element every time the button is clicked

    // remember that this parameter "data"
    // will be replaced with the argument "JSON.parse(this.responseText)"
    getData(type, function (data) {
        console.log(data); // for testing
        /*
        The output of console.log:
        {
            count: 82, 
            next: "https://ci-swapi.herokuapp.com/api/people/?page=2", 
            previous: null, 
            results: Array(10)
        }
        */

        // We need only the results property value which is an array of 10 people, planets, etc...
        data = data.results;

        // because data is just an array, we can use its method forEach()
        data.forEach(function (item) {
            el.innerHTML += "<p>" + item.name + "</p>"; // give it a new value
        });
    });
}