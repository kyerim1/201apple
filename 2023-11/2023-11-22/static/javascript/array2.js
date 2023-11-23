
// let num =[10,20,30,40,50,60];

// // num 배열에 10단위로 100까지 숫자를 추가로 저장하세요
// // num.push(70,80,90,100);
// num.push(70);
// num.push(80);
// num.push(90);
// num.push(100);
// // num배열에 저장된 숫자를 한줄에 하나씩 출력하세요(필! 반복문사용)
// for( var i=0; i<num.length; i++){
//     document.write( num[i] +"<br>");
// }

// // num배열에 저장된 숫자들에게  +3을 해주고 결과를 출력하세요 
// for( var i=0; i<num.length; i++){
//     num[i] = num[i]+3;
//     document.write( num[i] +"  ");
// }

// // num 배열에서 55보다 큰 숫자들만 출력하세요
// for( var i=0; i<num.length; i++){
//     if( num[i] > 55 ){
//         document.write( num[i] + "  ");
//     }
// }

// let num1 = [1,2,3];
// let num2 = [4,5,6];
// // 두배열에 같은 인덱스위치에 있는 숫자들끼리의 합을 출력하세요
// // 결과 ->   5 7 9 

// for( var i=0; i<num1.length; i++){
//     document.write( ( num1[i] + num2[i] ) + "  " );
// }

// // num1과  num2 배열에서  짝수에 해당하는 숫자만 
// //  num3 이라는 배열에 저장하고 출력
// let num3 = new Array();

// for( var i=0; i<num1.length; i++){
//     if(  num1[i]%2 == 0 )
//         num3.push( num1[i] );
//     if( num2[i]%2 == 0 )
//         num3.push( num2[i] );
// }
// document.write( num3.sort().reverse().sort() );

// 과제!!!
// 한화이글스 투수들의 평균자책점
// name=["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"]
// era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38 ]
// era-> 평균자책점
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치  이상인 선수들이 누구인지 출력하세요

const name=["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];
const era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38 ];

var total =0; // 평균자책점(era)의 총점을 구하기 위한 누적 변수
for( var i=0; i< era.length; i++){
    total += era[i]; // total = total + era[i] // 평균자책점(era) 총점구하기
}
var avg = total/era.length; //평균 자책점(era) 평균 구하기

for( var i=0; i<name.length; i++){
    if( avg <= era[i] ){  // era의 평균이상인 값 찾기 
        document.write( name[i]+"  "); // era 평균이상인 값의 인덱스를 name의 인덱스로사용
    }
}