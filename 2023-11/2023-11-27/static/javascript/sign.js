

$(function(){

    $("#mypw").on("keyup",function(){
        if( $(this).val().length < 6 || $(this).val().length > 12){
            $(".pwvaild").text("비밀번호 6~ 12자 입니다.");
        }else{
            $(".pwvaild").text('비밀번호 안전');
        }
    })


    $("#join").on("click",function(){

        if( $("#myid").val() == '' ){
            alert("아이디를 입력하세요");
            $("#myid").focus();
        }
        if( $("#mypw").val() != $("#pwre").val() ){
            alert("비밀번호가 같지않습니다.");
            $("#mypw").val('');
            $("#pwre").val('');
            $("#mypw").focus();
        }

    });
});