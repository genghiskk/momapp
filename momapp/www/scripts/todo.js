

function getToDoResults() {
    var queryString =
        'http://127.0.0.1:8000/polls/todo/?todo_id=1';
    console.log("In getToDoResults");
    console.log("Q:" + queryString);

    $.getJSON(queryString, function (results) {
        console.log(results.valueOf());
        console.log("Lenght of returned object:" + results.length);
        showToDoData(results);
    }).fail(function (jqXHR) {
        console.log("Error when doing HTTP Get for vote results")
        console.log("responseJSON:" + jqXHR.responseJSON);
        console.log("responseText:" + jqXHR.responseText);
        console.log("getJSON" + jqXHR.getJSON);
        console.log("status Text: " + jqXHR.statusText);
        console.log(jqXHR.error);
        console.log(jqXHR.getResponseHeader);
        resp = jqXHR.getResponseHeader;
        console.log(resp.toString());
        console.log(jqXHR.statusText);
    });




    return false;
}

function holdcode(results) {
    $('#question_name').text(results[0].question_text);
    $('#question_data').show();
    $('#error-msg').hide();
    $('#question-data').show();
}


function showToDoData(results) {
    console.log("In showToDoData");
    console.log("Results Length: " + results.length);
    $('#taskcount').text("1");

    for (i = 0; i < results.length; i++) {
        console.log("Row: " + i + " " + results[i].todo_desc);
    }
    document.getElementById("demo").innerHTML = text;

    console.log(results.valueOf());
    var JSONdata = new Array(results.responseJSON);
    console.log("JSONdata: " + JSONdata);
  
}

