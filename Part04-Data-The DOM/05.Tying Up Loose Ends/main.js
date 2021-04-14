function getData(url, cb) {
    var xhr = new XMLHttpRequest();
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

function generatePaginationButtons(next, prev) {
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

function writeToDocument(url) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = ""; // will clear it every time the button is clicked

    getData(url, function (data) {
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
        STEP 1: We're going to use a .replace() method.
        And this takes two arguments:
        - First Argument: what we want to find
        - Second Argument: what we want to replace it with
        */
        // Only for learning purpose: JavaScript String replace() Method:
        var str1 = "Visit Microsoft!";
        var str2 = str1.replace("Microsoft", "CBC");
        console.log(str2); // Visit CBC!

        /*
        We're going to use a "regular expression" to find our commas.
        Note: 
        regular expression will be discussed in further details in this course 
        and mainly in Django section

        But for now, we're going to type "/" (which indicates this is a regular expression) "/,/"
        So the comma between the two forward slashes is what we want to find.
        We're then going to type g: "/,/g".
        g means to find all instances of the comma.

        As we said, our replace() method takes two arguments.
        So for the second argument, after the comma after g, we're just going to supply an empty string.

        In other words, we want to find all commas and replace them with an empty string.

        stringObject.replace(a,b)
        stringObject = `<table>${tableHeaders}${tableRows}</table>${pagination}`
        */
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
    });
} // end function writeToDocument