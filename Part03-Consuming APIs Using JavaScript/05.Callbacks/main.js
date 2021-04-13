/*
Creating a function "getData" that contains the full boilerplate of AJAX-JSON request
We will use the argument of "cb"

"cb" standing for callback, and this will be the function that we parse in.

cb argument will be replaced with the function "printDataToConsole"
*/

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            /*
            We're checking to see if:
            our readyState is 4 and the status is equal to 200.

            And at that stage, we're then invoking our callback function that we parsed through as an argument.

            When we use cb below, it's going to run the function that we parse in as a callback.

            - it seems like we using the function argument "cb" to act as console.log() !?!?
            - No to need to wonder, cb should be the function to output the result
            */
            cb(JSON.parse(this.responseText));
        }
    } // end onreadystatechange
} // end getData()

/*
What we could also do instead of actually writing the function inside the brackets for getData, 
is we could write a separate function.

So we can create a new function called "printDataToConsole".
*/
function printDataToConsole(data) {
    console.log(data);
}

/*
The final step is to comment the original function getData(function (data)
and modify it as shown below:

We need to invoke a getData method with a function.

Notice that the data argument
will have the value of "JSON.parse(this.responseText)"

The reason we don't need to set a timeout here is because we are explicitly invoking our getData function.
*/

/*
getData(function (data) {
    console.log(data);
});
*/

// printDataToConsole("my text"); // to call a function
/*
And notice we don't put the opening and closing brackets 
because we are parsing in the actual function itself as an object.

function is also an object in JS 
Because of this, it can be pass it as a parameter, or argument, to another function.

so printDataToConsole is an object that we can pass it as an argument for getData() function
*/
getData(printDataToConsole);