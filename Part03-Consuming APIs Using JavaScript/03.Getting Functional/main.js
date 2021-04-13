var xhr = new XMLHttpRequest();

var data; // our Global Variable

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

/*
After testing the console.log(data) inside onreadystatechange function
and understand the reason of the problem, 
we can create another function for parsing the data 
and having this new function to be called inside onreadystatechange function:
*/
function setData(objectData) {
    // calling our global variable "data"
    // when we call the function this parameter "objectData"
    // will be replaced with the argument/receive the value of "JSON.parse(this.responseText)"
    data = objectData;
    console.log(data); // works fine
}

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // using our Global variable "data":
        data = this.responseText;
        /*
moving the console log inside the function will work fine:
Which means that all of the work we need to do with data would have to be done inside the "xhr.onreadystatechange" function,
which could make things really messy and complicated because all of the code for our application could potentially end up inside this function.
        */
        console.log(data); // String as JSON format

        /*
       - So we need to get our data variable value out of this function
       - The solution is to create a separate function and we can pass our data to that function. 
       we will be sending the responseText through a JSON parsed object into our setData function.
       
       Note: you need to comment the console.log(data); inside this function
        */
        setData(JSON.parse(this.responseText)); // will console.log (output) the data
        /*
        remember that we used only this line in our code:
        data = JSON.parse(this.responseText);
        */
    }
};

// Console.log below will give us also undefined!
console.log(data); // undefined

/*
So above we end up with the same problem.

JavaScript has a number of ways of dealing with this:
timeouts and callbacks

We will do it in the next topic...
*/