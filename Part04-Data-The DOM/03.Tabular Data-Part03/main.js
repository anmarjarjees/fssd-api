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
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked

    getData(type, function (data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function (item) {
            var dataRow = [];
            Object.keys(item).forEach(function (key) {
                /*
                2. Second:
                The other thing that we need to do to get it displaying nicely is to truncate, 
                or shorten, the information that's been inserted into our <td> element 
                to make them take up less space on the screen, so no need to keep scrolling.

                Our major task is to learn how to display this JSON data, more than how to present them.

                we created a new variable called rowData, 
                which is going to be set to the value of the key and make sure it's a string
                */
                var rowData = item[key].toString();

                /*
                3. Third: 
                Then I'm going to create a new variable called truncatedData, 
                which is going to be equal to a substring of our rowData.
                And we're just going to take from the 0 to the 15th character.
                So that will just take the first 15 characters from our rowData
                */
                var truncatedData = rowData.substring(0, 15);
                /*
                4. Forth:
                And now I can update my template literal here to show truncated data instead of rowData.
                */
                dataRow.push(`<td>${truncatedData}</td>`);
                // dataRow.push(`<td>${item[key]}</td>`); // We don't want to display the rowData anymore
            });
            /*
            1. First: first thing that we need to do is to have everything appearing on a separate row. 
            by adding <tr>:
            */
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
} // end function writeToDocument