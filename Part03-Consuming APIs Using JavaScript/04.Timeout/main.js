var xhr = new XMLHttpRequest();

var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

// We can remove (get rid of) function setData after using setTimeout()
/*
function setData(objectData) {
    data = objectData;
    // console.log(data); // works fine
}
*/

xhr.onreadystatechange = function () {
    /*
To understand what's happening inside onreadystatechange function, 
let's use console.log():

so every time the function is being called,
this.readyState will be printed in the console window
so not only if the condition is true
    */
    console.log(this.readyState); // 2 then 3 then 4
    if (this.readyState == 4 && this.status == 200) {
        // using our Global variable "data":
        data = JSON.parse(this.responseText);
        //setData(JSON.parse(this.responseText));
    }
};

// Console.log below will give us also undefined!
// console.log(data); // undefined

/*
use setTimeout():
The setTimeout function takes two parameters.
- The first is a callback function: 
so we can actually write a function in here as our first argument.
- The second argument is a parameter in milliseconds:
the time in milliseconds that we want our program to wait for.
*/
setTimeout(function () {
    /*
    so will tell the console.log to hold off from being executed for 500 milliseconds
    */
    console.log(data);
}, 500);

/*
So after 500 msc which is a long time to have the function wait until being run
*/