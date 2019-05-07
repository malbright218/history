$(document).ready(function () {
    // populateTimeLine();
    
   

});

var yearArray = [];

function populateTimeLine() {
    for (var i = 0; i < 552; i++) {
        yearArray.push(-3500 + (10 * i))
        console.log(yearArray)
        var year = $("<div></div>");
        year.addClass("year");
        year.append(yearArray[i])
        $("#timelineBar").append(year)
    }
}

