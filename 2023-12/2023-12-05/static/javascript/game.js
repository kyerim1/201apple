
let gameImg = ["scissors.png", "rock.png", "paper.png"];
const path ="./static/images/";
let com=0; // 컴퓨터 이미지 setInterval 값 저장변수
let comIdx=0; // 컴퓨터이미지 인덱스 

$(function(){

    $("#comImg").attr("src",path+gameImg[0]);

    $("#start").on("click", start);

    $(".user").on("click", result); // 유저 가위바위보 클릭시
});

function result(){
    var div = $(this);
    if( $("#start").prop("disabled") ){
    // .prop("disabled") -> 비활성화면 true, 활성화면 false
        div.css("background","pink");
        var my = clickImg(div);

        clearInterval( com );//setInterval 중단

        var ment = gameResult(my); //컴퓨터와 나의 승부 결과
        $(".res").text( ment);

        $("#start").attr("disabled", false);
        $("#start").text("시작");
    }
}

function gameResult(my){
    var cu = my - comIdx;
    switch( cu ){
        case 0:
            return "무";
        case 1: case -2:
            return "승";
        default:
            return "패";
    }

}

function clickImg(div){
    if( div.hasClass("scissors"))
        return 0;
    if( div.hasClass("rock"))
        return 1;
    if( div.hasClass("paper"))
        return 2;
}


function start(){ // 컴퓨터 가위바위보 이미지 보이기,
    com = setInterval( imgRoate , 100);//컴퓨터 이미지돌리기
    $("#start").text("게임중");
    $("#start").attr("disabled",true);
    $(".user").css("background","");
}


function imgRoate(){
    if(comIdx==2) comIdx=-1;
    //comIdx는 컴퓨터 이미지 표현하기위한 인덱스 변수다
    // comIdx의 값이 2가 될때는 화면에 보자기가 출력된 후이기 때문에
    // comIdx를 -1로변경한다.
    // ++comIdx에 의해 0으로 증가하여 0번인덱스인 가위이미지가 출력
    $("#comImg").attr("src", path+ gameImg[++comIdx]);
}