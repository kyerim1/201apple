
let mid=["abc","good","niceguy","skyblue123","tty","jkr11","kingpack","joker"];
let mpw=["1234","gd123","qwer1234","asdf1234","!qazws","!@qwer","12qw09po","123456"];



$(function(){
    $("#signBt").on("click",function(){

        if( $("#id").val() == '' ){
            alert("아이디를 입력하세요");
            $("#id").focus();
        }else if( $("#pw").val() == ''){
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }
        else{

            
            var idx = mid.indexOf(  $("#id").val() );
            if(idx == -1){//아이디 가 없다면 
                var ok = confirm("아이디가 존재 하지 않습니다.\n회원가입 하시겠습니까?");
                if(ok) location.href="signup.html";
            }else if(  mpw[idx] == $("#pw").val()  ){
                alert("로그인성공");
            }else{
                alert("비밀번호가 일치 하지 않습니다.");
                $("#pw").val("").focus(); // 비밀번호 재입력을위해 비우고 커서두기
            }


            // for( var tmp in mid){
            //     if( mid[tmp] == $("#id").val() ){
            //         if( mpw[tmp] == $("#pw").val()){
            //              alert("로그인 성공");
            //              break;
            //         }else{
            //             alert("비밀번호가 일치하지않습니다.");
            //             break;
            //         }
            //     }
            // }

        }

        // if($("#id").val != "abc"){

        // }
        // //로그인 시도가 된다면 - 아이디 비밀번호올바르지않은경우
        // else if( $("#id").val != 'abc' &&  $("#pw").val != '1234'){
        //     alert("아이디또는 비밀번호가 올바르지 않습니다.");
        //     $("#id").val("").focus();
        //     $("#pw").val("");
        // }


    });
});