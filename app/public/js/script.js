$(document).ready(function () {

    $.get("/api/data", data)

    function data(data) {
        var catArray = []
        for (var k = 0; k < data.length; k++) {

            catArray.push(data[k].Category)
            // console.log(catArray)
        }
        // console.log(catArray)
        var uniqueCat = []
        $.each(catArray, function (i, el) {
            if ($.inArray(el, uniqueCat) === -1) uniqueCat.push(el)
        })
        // console.log(uniqueCat)
        for (var l = 0; l < uniqueCat.length; l++) {
            var tablerow = $("<tr>")
            tablerow.addClass("catRow")
            tablerow.attr("val", uniqueCat[l])
            var tabledata1 = $("<td>")
            tabledata1.addClass("catData")
            tabledata1.append(uniqueCat[l])
            var tabledata2 = $("<td>")
            var btn = $("<button>")
            btn.addClass("btn btn-circle")
            btn.attr("id", uniqueCat[l])
            btn.attr("state", "on")
            tabledata2.append(btn)

            tablerow.append(tabledata1, tabledata2)
            $("tbody").append(tablerow)

        }

        $(".btn").on("click", function () {
            if ($(this).attr("state") === "on") {

                $(this).attr("state", "off")
                var a = $(this).attr("id")
                console.log(a)
                $("." + a).css("display", "none")
                $(this).css("background-color", "red")
            } else if ($(this).attr("state") === "off") {
                $(this).attr("state", "on")
                var a = $(this).attr("id")
                console.log(a)
                $("." + a).css("display", "")
                $(this).css("background-color", "#4CAE51")
            }
        })

       



        var birthdeath = []

        for (var i = 0; i < data.length; i++) {
            birthdeath.push(Number(data[i].Birth))
            birthdeath.push(Number(data[i].Death))
            var id = data[i].Id
            var name = data[i].Name
            var birth = data[i].Birth
            var death = data[i].Death
            var cat = data[i].Category
            var loc = data[i].Location

            var emptyDiv = $("<div>")
            emptyDiv.addClass("container")
            emptyDiv.addClass(cat)
            emptyDiv.addClass(loc)
            emptyDiv.addClass("parent")
            var width = data[i].Width
            emptyDiv.css("width", width)

            var row1 = $("<div>")
            row1.addClass("row")
            var col11 = $("<div>")
            col11.addClass("col col-left")
            var col12 = $("<div>")
            col12.addClass("col col-right")

            var row2 = $("<div>")
            row2.addClass("row")
            var col21 = $("<div>")
            col21.addClass("col col-left")
            var col22 = $("<div>")
            col22.addClass("col col-right")

            var emptyName = $("<p>")
            emptyName.append(name)
            var life = $("<p>")
            var emptyCat = $("<p>")
            var emptyLoc = $("<p>")

            life.append(birth + " - " + death)
            emptyCat.append(cat)
            emptyLoc.append(loc)

            col11.append(emptyName)
            col12.append(life)
            row1.append(col11, col12)

            col21.append(emptyCat)
            col22.append(emptyLoc)
            row2.append(col21, col22)

            emptyDiv.append(row1, row2)

            var birthPosition = Number(data[i].Birth)
            var position = (0 + birthPosition) * 5

            emptyDiv.css("left", position)
            emptyDiv.css("position", "relative")

            $("body").append(emptyDiv)
        }
    }





});



