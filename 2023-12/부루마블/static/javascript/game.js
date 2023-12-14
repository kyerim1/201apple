//  game.js

//전역변수
const dice_img=["dice1.png","dice2.png","dice3.png","dice4.png",
"dice5.png","dice6.png"]; // 주사위 이미지 배열
let turn=1; // 현재 플레이어 순서
let dice1=[0,0], dice2=[0,0]; // 주사위 setInterval 값 저장 변수


//함수 정의
function rolling(obj){ // 주사위 생성된후 버튼을클릭하면 주사위가 
    //  이미지가 변경되는 함수,  obj는 버튼 태그객체를 전달받는 변수
    $(obj).text("멈춰!");
    $(obj).attr("onclick","stop(this)");
    
    //주사위 돌리기
    var setTime=100;
    dice1[0] = setInterval( function(){

        dice1[1] = Math.floor(Math.random()*6 );
        $("#dice1").attr("src","./static/images/"+dice_img[ dice1[1] ] );
        
    } , setTime );
    dice2[0] = setInterval( function(){

        dice2[1] = Math.floor(Math.random()*6 );
        $("#dice2").attr("src","./static/images/"+dice_img[ dice2[1] ] );
        
    } , setTime );
}

function stop(obj){ // 주사위를 멈추는 함수
    $(obj).text("굴리기");
    $(obj).attr("onclick","rolling(this)");

    clearInterval(dice1[0]);
    clearInterval(dice2[0]);

    meeple_move();
}

function meeple_move(){ // 주사위 값에 따라 말을 움직이기
    var gamer = player_list[turn-1];
    var dice_sum = dice1[1] + dice2[1]+2;
    var old_location = gamer.location; // 현재 위치(이동전);

    // 플레이어 위치 변경
    if( gamer.location+dice_sum > 31 ){ //주사위값이 이동할 위치가 대전위치를넘는다면
        var diff = (gamer.location+dice_sum) - 31;
        gamer.location = diff-1;
        zone[31].func(gamer); // 출발지 통과하거나 도착하면 실행 함수, 
        // zone클래스중 31번째가 출발지 div 이다.
    }else{
        gamer.location = gamer.location + dice_sum;
    }
  
    말위치변경(gamer , old_location);

    // 이동한 위치에 땅에서 할일
    game_todo( find_location(gamer.location) , gamer );

    // 다음 플레이어 턴 넘기기
    turn = 다음턴(turn);
    

    $(".pcity").css("background","");
    $("#pcity"+turn).css("background","white");
}

function 다음턴( who ){
    if(who==player_list.length)
        who=0;
    
    if( island_.includes( who+1 )  ){
        player_list[who].drift_turn--;
        if( player_list[who].drift_turn == 0 ){ //무인도 남은턴이 0 이면 island배열에서 제거
            island_.splice( island_.indexOf(who+1),1 );
        }
        return 다음턴(who+1);
    }

    if( player_list[ who ].파산 )
        return 다음턴(who+1);

    return who+1;
}



function 말위치변경(gamer, old_location){
    // 말 위치 변경 , 이전 위치에서는 제거
    var old_zone = find_location(old_location); // 이동전 말위치 찾기
    $(".zone").eq(old_zone).children(".m"+gamer.num).remove();
    
    var zone_location = find_location( gamer.location );//이동할 말위치 찾기
    var tag=`
            <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
            style='color:${gamer.color};  '>
                <i class="fa-solid fa-jet-fighter"></i>
            </div>
        `;
    $(".zone").eq(zone_location).append(tag);
    overlap(zone_location); // 다른말과 겹치지 않게
}

function game_todo( location , gamer ){ 
// location 매개변수는 zone클래스들중 몇번째 zone클래스인지 인덱스값 있음
// location의 값은 몇번째 zone클래스인지 알수도있지만 , zone 배열의 
//  구역객체의 인덱스로도 사용가능
    var city = zone[location];
   

    if(city.purchase == 0){ // 매입금이 0인곳은 무인도,기금,출발,공항,납부
        // 16-복지기금, 24-공항, 28-기금납부, 8-무인도, 0-출발지
        if( city.num != 0) //출발지 도착에 대해서는 meeple_move에서 구현했다.
            city.func(gamer);

    }else if( city.owner == ''){ // 도시의 주인이 없는경우
        if( confirm(`${city.name}의 매입가는 
            ${city.purchase}만원 입니다. \n매입 하시겠습니까?`) ){
                if( gamer.money < city.purchase){ // 토지매입가 보다 플레이어자금이적으면
                    alert("자금이 부족합니다.");
                    return;
                }
                city.owner=gamer.num; //토지소유자 변경
                gamer.money -= city.purchase; // 토지금액만큼 차감
                $("#pm"+gamer.num).text(gamer.money+"만원"); //변경된플레이어금액 표시
                
                $(".zone").eq(location).children(".zone_name").
                         css("background", gamer.color); //플레이어색으로 변경
                gamer.zone++;
                $("#pcity"+gamer.num).text(gamer.zone+"개");
        }
    }else{  // 도시의 주인이 있는경우
        // 도시의 주인에게 토지매입금만큼 통행료 지불
        var owner = city.owner; // 도시 주인 번호
        var tollfee = city.purchase; // 통행료
        if( gamer.money < tollfee){ // 플레이어자금이 통행료보다 작다면
            player_list[owner-1].money += gamer.money;
            gamer.money=0;
            gamer.파산=true;// 자금이 부족하여 파산 
            파산처리(gamer);// 파산된 플레이어의 토지를 전부 매각과 토지색상제거, 말 제거

        }else{
            gamer.money -= tollfee;
            player_list[owner-1].money += tollfee;
        }

        $("#pm"+owner).text(player_list[owner-1].money+"만원");
        $("#pm"+gamer.num).text(gamer.money+"만원");
        alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`);
    }
}


function 파산처리(gamer){ // 자금부족으로 파산된 플레이어 처리

    //소유한 토지 전부 owner 초기화 ,소유한 토지 배경색 제거
    $.each(zone, function(idx, city){
        if( city.owner == gamer.num ){
            city.owner=''; // 소유주 초기화
            var zl = find_location( city.num );
            $(".zone").eq(zl).children(".zone_name").css("background","");//배경색 제거
        }
    });

    // 말 제거
    var zl = find_location( gamer.location );
    $(".zone").eq(zl).children(".m"+gamer.num).remove();

}

function airport_move(){
    if( $(this).hasClass("center") ) return; // 보드의 가운데 클릭시 아무것도 안함

    if(탑승객 != 0 ){ //탑승객 변수에 0이 있다면 현재 이용할수 있는 플레이어가 없다.
       
        // meeple_move에서 turn이 변경되기때문에 공항에 도착한 
        //플레이어가 위치를 선택하고 turn이 변경되어야 한다. 
        // 공항에 도착한 플레이어를 표현하기위해 turn을 -1을 해준다.

        var 클릭한도시 = $(this);
        var 클릭한도시번호 = $(this).data("num");
        if( 클릭한도시번호 == 24){ //24는 공항 num 이다.
            return; // 공항을 클릭하면 아무 작업도 하지않는다.
        }
        var gamer = player_list[탑승객-1];
        var old_location = gamer.location;
        gamer.location = 클릭한도시번호;

        // 출발지를 클릭했냐?  출발지를 통과하냐?
        if( 클릭한도시번호>=0 && 클릭한도시번호 < 24 )
            zone[31].func(gamer);


        말위치변경( gamer, old_location);

        var zone_location = find_location( 클릭한도시번호 );
        game_todo(zone_location , gamer); //클릭한위치에서 할일 실행(매입,기금,무인도,출발지등);
        탑승객=0;
    }
}