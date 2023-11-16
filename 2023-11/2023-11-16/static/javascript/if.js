//if문 - 조건식의 참,거짓에의해 내용을 실행 시킨다.
/* 

if( 조건식 ){
    참일 경우 실행할 내용
}
if뒤에 작은괄호열어서 안에 조건식을 작성한다.  조건식 뒤에는 중괄호를 열어서
안에  참일 경우 실행할 내용을 작성한다.

if( 조건식 ){
    참일 경우 실행할 내용
}
else{
    거짓일 경우 실행할 내용
}
조건식 거짓이라면 첫번째중괄호는 건너뛰고(jmp) else 뒤의 중괄호를 실행 시킨다.
if문에서 조건식 작성할수 있는곳은 오직 if 뒤에만 가능하다. 
else 뒤에는 조건식 넣을수 없다.

조건에 따라  실행될 내용이 여러개 라면( 3개 이상)
if( 조건식 ){
    내용
}
else {
    if( 조건식){
        내용
    }else{
        내용
        내용
    }
}

if( 조건식 ){
    내용
}else if(조건식){
    내용
}else{
    내용
}

*/

// var num = 20; // num이라는 변수공간에 20을 저장해라.

// // (num>0) ? console.log("양수다") : console.log("음수다");

// if( num > 0){
//     console.log("양수다");
// }else{
//     console.log("음수다");
// }

// var birth = parseInt(prompt( "생년월일(8자리) 입력" ));
// //  birth = 19991204
// if ( birth <= 20041231 ){
//     console.log("성인이다");
// }else{
//     console.log("미성년자입니다.");
// }

//     // 국어, 영어 ,수학 3과목 점수 입력받기
//     //  3과목의 평균점수가  65점 이상이면 통과 라고 출력
//     //  65점 미만이면 낙제 라고 출력 하시오.

//     var kor = parseInt(prompt("국어점수"));
//     var eng = parseInt(prompt("영어점수"));
//     var mat = parseInt(prompt("수학점수"));

//     var avg = (kor+eng+mat)/3;
//     if( avg >= 65 ){
//         console.log("합격,통과");
//     }else{
//         console.log("낙제");
//     }


// 동전 앞면 뒷면 맞추기
