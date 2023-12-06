
$(function(){
    $("#apply").on("click" , sizeApply );
});

function sizeApply(){
    var wd = $("#wd").val();
    var hg = $("#hg").val();

    opener.$("#draw>table>tbody>tr>td").css("width", wd+"px" );
    opener.$("#draw>table>tbody>tr>td").css("height", hg+"px" );

    opener.$("#color").attr("disabled",false);
    window.close();
}