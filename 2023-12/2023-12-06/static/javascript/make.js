// make.js

$(function(){
    $("#make").on("click", makeTable);
});

function makeTable(){
    var row = Number( $("#row").val() );
    var col = Number( $("#col").val() );

    var table ="<table>";
    for(var i=1; i<=row; i++){ // 행, tr
        table += "<tr>";
        for(var k=1; k<=col; k++){ //열 , td
            table +="<td></td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    // $("#draw",opener.document)
    opener.$("#draw").html(table);

    opener.$("#size").attr("disabled",false);

    window.close();
}