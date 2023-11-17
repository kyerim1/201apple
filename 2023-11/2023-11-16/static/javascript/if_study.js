//브라우저에 html태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드
window.onload=function(){  
    
    // 조건문 - if문,  switch문

    // if( a==10 ){
    //     alert("같다");
    //      a=a+10;
    //      a=a++;
    //      alert(a);
    // }else{
    //     alert("같지않다");
    // }

    
        // if(a>10){
        //     break;//오류
        // }
 

    // var a=234;
    // switch(a){
    //     case 1:
    //         alert("1");
    //         break;
    //     case 1000:
    //         alert("1000");
    //         break;
    //     case 234:
    //         alert("234");
    //         break;
    //     case 10:
    //         alert("10 선택");
    //         break;
    // }

    var airjordan=2;
    var airmax=97;
    var alp = "나이키 에어포스 90 재고";
    switch( alp.split(" ")[5] ){
        case "에어조던":
            document.write("현재 재고 수량은 "+ airjordan+"개");
            break;
        case "에어맥스":
            document.write("현재 재고수량은 "+ airmax+"개");
            break;
        case "a":
            document.write("apple");
            break;
        default:
            document.write("죄송합니다.");
    }

    //과제
    //  주차비 정산
    //  apple주차장의 주차요금 표
    //   기본 주차비 - 1000원,  기본 시간- 30분
    //   ( 30분 이내 주차시 1000원 ,  5분 주차해도 1000원, 39분까지 1000원)
    //   10분당 100원씩 추가  ( 40분 주차시 1100원, 54분 주차시 1200원 )
    
    //   2시간 이상 주차시 기본요금 변경 
    //             기본요금 - 1500원 
    //   4시간 이상 주차시 기본요금 변경
    //             기본요금 - 2500원
    //   8시간 이상 주차시 요금은 무조건 10000원 
    //            (10시간,12시간, 9시간43분   전부다 10000원 )

    //             (2시간 1분주차시 - 1500원, 2시간 34분주차시 - 1800원)
    //  주차시간을 분단위로 입력하여  주차요금이 얼마인지 출력하시오



    var time = parseInt(prompt("주차시간"));
    var cost =1000;

    if(time >= 480){
        cost=10000; time=0;
    }else if( time>= 240){
        cost=2500;  time = time-240;
    }else if( time >= 120){
        cost=1500;  time= time-120;
    }else{
        time = time<30 ? 0 : time-30;
    }

    var price = Math.floor( time/10)*100 + cost;
    document.write(`주차요금 : ${price}원`);




/*
    if( score >=90)
    else if(score>=80){}
    else if( score >= 70 ){}
    else {}

*/

    var score = 75;
    switch( parseInt(score/10) ){
        case 10: case 9:
            document.write("A학점"); break;
        case 8:
            document.write("B학점"); break;
        case 7:
            document.write("C학점"); break;
        default:
            document.write("F학점");
    }




    // 주사위 게임 만들기
    // 컴퓨터와 주사위 게임을 한다.
    // 각자 주사위 두개씩 던진다.   주사위 합이 큰쪽이 이긴다.
    // 단, 두주사위값이 같은 숫자가 나온쪽이 이긴다.
    //  둘다 같은숫자가 나온다면 합이 큰쪽이 이긴다.

    // var com1 = Math.floor(Math.random()*6)+1;
    // var com2 = Math.floor(Math.random()*6)+1;
    // var user1 = Math.floor(Math.random()*6)+1;
    // var user2 = Math.floor(Math.random()*6)+1;
    
    // var user = user1+user2;
    // var com = com1+com2;



    // if( user > com ){
    //     if( (com1 == com2) && (user1 != user2)  ){
    //         alert("패");
    //     }else{
    //         alert("승");
    //     }
    // }else if( user < com ){
    //     if( (user1==user2) && (com1 != com2)){
    //         alert("승");
    //     }else{
    //         alert("패");
    //     }
    // }else{
    //     if( (user1==user2) && (com1 != com2) ){
    //         alert("승");
    //     }else if( (user1!=user2) && ( com1 == com2) ){
    //         alert("패");
    //     }else{
    //         alert("무");
    //     }
    // }

}
