// board.js

//플레이어 생성자 함수
function player(num, color){
    this.num=num;
    this.color=color;
    this.money=100; // 초기 게임머니 100만원
    this.zone=new Array(); // 매입 한 토지를 배열로 저장
    this.drift_turn=0; // 무인도 남은 턴
    this.location=0;// 현재위치
}

// 전역변수
let fund = 0; // 사회복지기금 모금 금액 저장 변수
let island_ = new Array(); // 무인도에 도착한 플레이어
let zone = new Array();//각 구역의 객체 저장 배열
let player_list = new Array();// 게임 참가자

// 함수정의


// 구역객체들을  zone 클래스 div에 적용하기
function zone_draw(){
    $.each( zone, function( idx, obj){
        if(idx == 0 || idx==8 || idx==23 || idx==31){
            $(".zone").eq(idx).css("background-image","url(./static/images/"+obj.back+")");
            $(".zone").eq(idx).css("background-size","cover");
            $(".zone").eq(idx).css("background-position","center");
        }else{
            $(".zone").eq(idx).children(".zone_name").text( obj.name);
            $(".zone").eq(idx).children(".zone_color").css("background-color",obj.color);
        }
         // 각 구역의 번호 부여
        $(".zone").eq(idx).attr("data-num",obj.num);
    });
}
function game_init(){
    var pc = Number( $("#player_number").val() );

    $("#game_state").html("<h3>게임현황</h3>");

    for(var i=1; i<=pc; i++){
        player_list.push( new player( i, "#ff0000" ) );
        $("#game_state").append(
            `<div class='ps'>
                <b class='pnum'>${i}</b>
                <input type='color' id='pcl${i}' value='${player_list[i-1].color}'>
                <div class='steate'>
                    자금 : <b id='pm${i}'>${player_list[i-1].money}만원</b>
                    보유도시 : <b id='pcity${i}'>${player_list[i-1].zone.length}개</b>
                </div>
            </div>`
        );    
    }
    $("input[type=color]").on("change", change_pcl );
    $("#game_state").show();
    $("#set_player").hide();

    // 게임 플레이어수에 맞는 말 만들기
    // svg -scalable vector graphics (수학공식을 통해 이미지를 저장,표시)
    // <i class="fa-solid fa-jet-fighter"></i>
    
    for(var i=0; i<player_list.length; i++){
        var gamer = player_list[i];
        var zone_location = find_location( gamer.location );
        var tag=`
            <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
            style='color:${gamer.color};  '>
                <i class="fa-solid fa-jet-fighter"></i>
            </div>
        `;
        $(".zone").eq(zone_location).append(tag);

        overlap(zone_location);
    }

    create_dice(); //주사위 생성
}

function create_dice(){ // 화면에 주사위 나타내기
    var dice =``;
}


function overlap(location){ // 말이 생성되거나 이동했을때 위치에 다수의말이 있다면
    //  겹치지 않기 위한 코드를 실행 하는함수
    var len = $(".zone").eq(location).children(".meeple").length;
    if(  len  >= 2 ){
        var left=50, top=50;
        for( var i=0; i<len; i++){
            $(".zone").eq(location).children(".meeple").eq(i).
            css("left",(left+i*5)+"%");
            $(".zone").eq(location).children(".meeple").eq(i).
            css("top",(top+i*5)+"%");
        }
    }
}

function find_location( n ){// 플레이어 말이 표시될위치 또는 이동할 위치찾기
    var index=0;
    $(".zone").each( function( idx, item ){ 
        var num = Number( $(item).data("num") );//zone클래스 태그의 data-num값
        if( num == n ){
           index=idx;
           return; // retrurn은 해당함수를 종료시키기도한다.
           // each 안에 만든 익명함수만 종료시키기 때문에 find_location함수를
           // 통해 return(반환) 하는게 불가능하다. 그래서 값을 index변수에
           // 저장하여 index변수를 반환 시켜준것이다.
        }
    });
    return index; // data-num 과 n 의 값이 일치하는 태그의 위치넘기기
}

function change_pcl(){ // 플레이어가 자신의 말 색상을 변경할경우 실행
    var new_color = $(this).val();
    var num = Number($(this).attr("id").substring(3));  // attr 은 태그의속성 - id,class,name 등등
    var gamer = player_list[num-1]; // 색상 변경한 플레이어객체
    
    gamer.color=new_color;
    //자신의 말 찾기, num변수에는 플레이어의 번호가저장되있다.
    for( var i=0; i<$(".meeple").length; i++){
        if( $(".meeple").eq(i).data("pn") == num ){
            $(".meeple").eq(i).css("color",new_color);
            break;//플레이어말 찾아서 색변경 했으니까 반복문 종료
        }
    }

}


$(function(){
    // 현재상황 -  json파일내용은 어제다루었던 zone배열안의 내용과 같다.
    // getJSON으로 json파일을 읽어와서 zone배열에 저장 
    //  zone 배열의 내용은 어제와 동일하다.
    // zone_draw() 함수는 zone 배열의 값을 가지고와서 화면에 표시한다.
    // 하지만 zone_draw() 함수가 정상적으로 동작하지 못하고 있다.
    // getJSON의 function(data) {  } 안으로 zone_draw() 함수를 넣어주면
    // 정상적으로 실행된다.
    // 비동기문제 발생 !!!!
    // 비동기처리 코드가 실행이 완료되면 그다음 실행 될수 있게 하는방법
    // async , await
    //  async를 비동기함수 앞에 붙여준다.
    //  await는 비동기 처리 앞에 붙여준다.
    //  async function a(){   await $.getJSON( );  }

    $.getJSON("./data/city.json" , function(data){ 
        zone = data;
        console.log( zone );
        zone_draw();
    });
    

    $("#enroll").on("click", game_init );
    $("#player_number").on("change", function(){
        $(this).next().text( $(this).val() + "명");
    } );
    $("#player_number + label").text(2+"명");

    
});



// 과제    -  각 구역의 객체를 json 으로 작성 해오세요.
//      city.json   으로 작성 하세요.

// zone_Object 생성자 함수로  생성한 객체들을 json파일로 작성 















/*
const zone_name=[
    "복지기금","화성","성남","창원","제주","용인","수원","울산",
    "인천공항","청주","광주","부천","대구","남양주","인천","포항",
    "복지기금납부","천안","부산","전주","서울","안산","대전",
    "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
];
const zone_color=["#FF2424","#53C14B","#FFBB00","#121212"]; // 각 면의 색상
const land_purchase=[  // 각 도시의 매입 가격 ( 만단위)
    0, 25, 27, 26, 34, 28, 27, 39,
    0, 16, 42, 20, 45, 19, 48, 27, 
    0, 21, 52, 20, 80, 22, 120,
    0, 12, 10, 15, 12, 9, 9, 7, 0

];

const bg_image= [ // 모서리구역의 배경이미지
    "출발.jpg", "무인도.jpg","복지기금.jpg","인천공항.jpg"
];

// 각 구역의 객체 생성자 함수
//  구역 이름, 토지매입가격, 소유자, 색상, 기능(모서리부분), 이미지
function zone_Object( name, purchase, owner, color, func, image){
    this.name=name;
    this.purchase=purchase;
    this.owner=owner;
    this.color=color;
    this.func=func;
    this.back=image;
}

function zone_create(){
    for( var i=0; i< zone_name.length; i++){
        var color = zone_color[0];
        if( i>=0 & i<=7)
            color = zone_color[2];
        if( (i>=8 & i<=23) & i%2==0 )
            color = zone_color[3];
        if( (i>=8 & i<=23) & i%2==1 )
            color = zone_color[1];

        var image = "";
        if( i == 0) image = bg_image[2];
        if( i== 8) image = bg_image[3];
        if( i== 23) image = bg_image[1];
        if( i== 31) image=bg_image[0];

       zone.push( new zone_Object(
        zone_name[i] , land_purchase[i], "", color, "", image
       )  );
    }
    console.log(  JSON.stringify(zone)   );
}

*/