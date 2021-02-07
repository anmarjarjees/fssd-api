const baseURL = "https://ci-swapi.herokuapp.com/api/";
/*
cb "call back function" to invoke our anonymous function 
just to print inside the id element:
function (data) {
        document.getElementById("data").innerHTML = data;
});
*/

// This function to run the AJAX request:
// Two parameters:
// type: the category like "starship", "people", etc...
// cb: the call back function
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

// This function will run on user click event:
function writeToDocument(type) {
    getData(type, function (data) {
        /*
        We need to unpack this data by first determining how to access it:
        we will use "console.dir"
        "dir" stands for directory

        data = JSON.parse(this.responseText)
        */

        // we put the two methods just to compare the result:
        console.log(data);
        console.dir(data); // for testing
        /*
        The output of console.dir:
        An object with its properties:
        It has an array called "results"
        And this contains an array of 10 items.
        10 items, 10 different people in the arrangement 
        from "Luke Skywalker" down to "Obi-Wan Kenobi" at the end.
        
        We also have a URL called "next".
        That's for pagination, so we just show 10 items at a time. When we click on the "next" button,
        it will show us the next 10 items, and so on and so forth.
        */

        /*
        So if we want to display this, then what we need to do, is set our innerHTML to "data.results".
        if you refresh the page and click on people, you will have 10 objects being rendered
        */

        // for testing and learning:
        // the result below if we click the "people" button:
        // document.getElementById("data").innerHTML = data.count; // 82
        // document.getElementById("data").innerHTML = data.next; // https://ci-swapi.herokuapp.com/api/people/?page=2
        // document.getElementById("data").innerHTML = data.results; // the list of all [object object]

        /*
        Now instead of using "data.results", we're going to overwrite our existing data variable with "data.results" to make it easier:                     
        Just take out the "console.dir". So we do "data = data.results".
        */
        data = data.results;

        console.log("data of results: " + data); // for testing
        /*
       now we can use a for each loop:

        array.forEach(element => {
           
        });

       "data.forEach", so for each element in data.
               
        It's going to run this function.      
        It's going to take all the items in this array.  
        */

        /*
         array.forEach()
         for more information:
         https://www.w3schools.com/jsref/jsref_foreach.asp
        */

        /*
        if you run the code you will see [object][object]
        but we need to display the name.
        Now that we have this unpacked into JSON format, 
        we can just do "item.name".
        */

        // remember that data is data.results
        /*
        Please don't forget to write += instead of just =

        because += will add (concatenate) the current text with the previous one
        while = will override the previous one
        */
        data.forEach(function (item) {
            document.getElementById("data").innerHTML += "<p>" + item.name + "</p>";
        });
    });
} // writeToDocument