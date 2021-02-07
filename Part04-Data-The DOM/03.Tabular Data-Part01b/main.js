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
/*
After testing the console log with new code: Object.keys(item).forEach(function (key)
We are going to create a new function called "getTableHeaders".
And this is going to take in a single object, we'll just call it "obj" as a parameter
*/
function getTableHeaders(obj) {
    /*
    And then we're going to create a new array called "tableHeaders", 
    which we're going to initialize as an empty array.    
    */
    var tableHeaders = [];
    /*
    After that, we're going to use the same code again by taking our object and iterate over the keys.
    So we'll do a forEach function once again. 
    this is going to iterate over each key and inside the function we are going to push it to our tableHeaders array.
    */
    Object.keys(obj).forEach(function (key) {
        /*
        Using <td> elements to have it formatted nicely by creating a new table cell:
        
        Using a new way:
        backtick, or back quote, formation here. Those are not standard single quotes.
        This is something called a "template literal", which allows us to interpolate variables and strings like this.
        */
        tableHeaders.push(`<td>${key}</td>`);
        /*
        Notice that if you don't want to use this new way "backtick" or "back quote",
        you can use the normal classic official way of concatenating in JS:
        below is our normal way:
        */
        // tableHeaders.push('<td>' + key + '</td>');
    });
    /*
       Adding each of those into a row
    */
    return `<tr>${tableHeaders}</tr>`;
} // end getTableHeaders

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked

    getData(type, function (data) {
        data = data.results;
        /*
        Once we've retrieved our data, we'll call the getTableHeaders function.
        And passing the first object in the array.
        
        and save the returned value which is a table row into a new variable "tableHeaders"
        */
        var tableHeaders = getTableHeaders(data[0]);

        /*
         data.forEach(function (item) {
             
             // we will comment this line because added a new one at the end
             
             // el.innerHTML += "<p>" + item.name + "</p>";
         });
        */

        /*
        At the end and set the innerHTML of "el" to our table headers.
        using "template literal" again to send in a table.
        and then writing the tableHeaders variable in there
        */
        el.innerHTML = `<table>${tableHeaders}</table>`;
        /*
        Please be advised again that in stead of using this way in the video:
        ` with ${} with ` which is also good to know!

        you can write the same line using:
        el.innerHTML = '<table>' + tableHeaders + '</table>';
        */
    });
} // end function writeToDocument