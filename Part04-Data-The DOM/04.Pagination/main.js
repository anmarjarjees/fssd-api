/*
STEP 4:
Remove the constant baseURL

and passing url parameter into our function getData() by replacing type parameter with url
*/
// const baseURL = "https://ci-swapi.herokuapp.com/api/"; // you can remove this line

// replace type parameter with url
function getData(url, cb) {
    var xhr = new XMLHttpRequest();
    /*
    Based on the instruction in STEP 4, we need to modify this line also:
    - Replacing: xhr.open("GET", baseURL + type + "/");
    - With: xhr.open("GET", url);
    */
    // xhr.open("GET", baseURL + type + "/"); // this is the old code
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function (key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

/*
STEP 2:
Creating the "generatePaginationButtons" function that are being called inside function "writeToDocument"
*/
function generatePaginationButtons(next, prev) {
    /*
    If: (there is a value, a URL, for both next and previous) 
    Then: we are going to return a template literal that creates a next and a previous button.
    */
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
            <button onclick="writeToDocument('${next}')">Next</button>`;
        /*
        We don't want always to have a next and a previous value.
        If we're at the beginning, then it doesn't supply a previous value. 
        If we're at the end, it won't supply a next value.
        */
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

/*
Also based on STEP 4, we need to replace the 2 variables (parameters) of name "type" with "url" makes more sense to us
*/
function writeToDocument(url) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked

    getData(url, function (data) {
        /*
        STEP 1: 
        Put an if statement.
        And if (data.next || data.previous) values exist, 
        then we're going to generate some pagination buttons, some next and previous buttons.
        
        by creating a function as written above. Below we are calling a function "generatePaginationButtons" 
        */
        var pagination = ""; // create and declare "pagination" variable ="" to prevent "undefined" text
        if (data.next || data.previous) {
            // Preparing the pagination button
            pagination = generatePaginationButtons(data.next, data.previous)
        }

        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function (item) {
            var dataRow = [];
            Object.keys(item).forEach(function (key) {

                var rowData = item[key].toString();


                var truncatedData = rowData.substring(0, 15);

                dataRow.push(`<td>${truncatedData}</td>`);
            });

            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        /*
        STEP 3 (Last Step before doing the major changes on the html file and JS):
        Adding the new pagination variable to the end of the table to be displayed

        - Running the code in this stage will produce and error
        - And as we can see, what's actually happening is that the URL we want is been appended onto the base URL.
        */
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
    });
} // end function writeToDocument