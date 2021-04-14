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
We are going to creat a new function called "getTableHeaders" 
which is the next part of this code (in different file inside Part01b)
*/
function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked
    getData(type, function (data) {
        data = data.results;
        // Object.method() => data.forEach()
        data.forEach(function (item) {
            /*
            Object.keys(item):
            Remember that the data is stored in "key-value" pairs; 

            keys such as "name", and values such as "Luke Skywalker"

            for films:
            we have the key as "title", and value as "A New Hope"

            forEach(function(key) { }):
            Adding another forEach loop inside then we can iterate over each of these keys
            Plus adding an anonymous function to write our main code as we done above
            "Chaining Methods"
            */
            Object.keys(item).forEach(function (key) {
                // using console.log for testing each key value:
                console.log(key);
            });

            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
} // end function writeToDocument



