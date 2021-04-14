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

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function (key) {
        tableHeaders.push(`<td>${key}</td>`);

        // below is our normal classical way:
        // tableHeaders.push('<td>' + key + '<td>');
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    /*
    Creating a new empty array called tableRows.
    And tableRows will house each row of data for us.
    */
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked

    getData(type, function (data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function (item) {
            /*
           We're going to create a new row of data for every record in the array.
           Creating an empty array first to be used for every individual row:
            */
            var dataRow = [];

            /*
            And then we're going to iterate over our keys again.
            So using the same method as before, object.keys(item)
            */
            Object.keys(item).forEach(function (key) {
                /*
                The function inside that is going to push each element onto our data row.
                And we will create a new 'td', or tableCell element, for each of these items.
                using the same template literal.

                And what we do is we have {$item}, and then we pass in [key] as the index, 
                so this will actually get us the data that's in each individual key. 
                Rather than just the key name itself, we'll get the value
                */
                dataRow.push(`<td>${item[key]}</td>`);
            });
            /*
            When that row is created then, after it's iterated over, 
            we need to push that row into our tableRows array.
            */
            tableRows.push(dataRow);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
} // end function writeToDocument