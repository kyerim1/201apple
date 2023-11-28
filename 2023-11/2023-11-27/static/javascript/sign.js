

$(function(){


    // select 선택 option 변경 하기
    $("#route option").eq(2).prop("selected",true);


    // 전부체크 체크박스에 체크시 전체 체크로 변하게  또는 반대 상황
    $("#all").on("click",function(){
        let isCheck = $(this).is(":checked");
        if(isCheck)
            $(".ability_list").prop('checked',true);
        else
            $(".ability_list").prop('checked',false);
    });

    $(".ability_list").on("click",function(){
        var chk_count = $(".ability_list:checked").length; //능력 체크박스에 체크된 갯수
        var all_check = $(".ability_list").length;// 능력 체크박스 총 갯수
        if( chk_count == all_check) // 체크된 갯수와  총 갯수를 비교
            $("#all").prop("checked",true); //체크갯수와 총 갯수가 같다면 전체 체크박스에 체크
        else
            $("#all").prop("checked",false);//체크갯수와 총갯수가 다르면 전체 체크박스에 체크해제
    });



    $("#mypw").on("keyup",function(){
        if( $(this).val().length < 6 || $(this).val().length > 12){
            $(".pwvaild").text("비밀번호 6~ 12자 입니다.");
        }else{
            $(".pwvaild").text('비밀번호 안전');
        }
    })

    $("#myphone").on("keyup",function(){
        let num = $(this).val();

        //num = num.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3` );
        num = num.replace(/[^0-9]/g, '').
                    replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,`$1-$2-$3`).
                    replace(/(\-{1,2})$/g,"");
        $(this).val(num);

        // 문자열은 기본구조가 배열의 구조이지만 자바스크립트에서 문자열 객체로 사용되기
        // 때문에  객체전용 함수가 따로 존재한다.
        // if( num.length == 4 ){
        //     num= num.slice(0,3)+"-"+num.slice(3);
        //     $(this).val(num);
        // }
        // if(num.length == 9){
        //     num= num.slice(0,8)+"-"+num.slice(8);
        //     $(this).val(num);
        // }

        //

    });


    $("#join").on("click",function(){

        //파일업로드  확장자 검증
        console.log(  $("#myface")[0].files[0].name   );
        var fname = $("#myface")[0].files[0].name ;
        if(  !fname.toLowerCase().includes(".png")  ){
            alert("png 형식의 이미지만 가능합니다.");
        } 


        //select 값 가져오기
        var v = $("#route").val();  // $("#route option:selected").val();
        alert(v);


        //var chk = $(".ability_list").eq(0).is(":checked");
        //alert( chk );
        //var len = $(".ability_list:checked").length;
        //alert(len);

        let chk =''; // 체크박스에 체크된 값들 저장 변수
        $.each( $(".ability_list:checked") , function(){  // 체크되어있는 checkbox만 반복문처리
            chk += $(this).val() + "  ";
        });
        alert( chk);

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