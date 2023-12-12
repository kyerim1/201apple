// board.js

const zone_name=[
    ["안양","김해","평택","시흥","파주","의정부","김포","출발"],
    ["청주","부천","남양주","포항","천안","전주","안산","무인도"],
    ["복지기금","화성","성남","창원","제주","용인","수원","울산"],
    ["인천공항","광주","대구","인천","복지기금납부","부산","서울","대전"]
];
const zone_color=["#FF2424","#53C14B","#FFBB00","#121212"]; // 각 면의 색상
const land_purchase=[  // 각 도시의 매입 가격 ( 만단위)
    [0,  7,  9,  9, 12, 15, 10, 12],
    [0, 16, 20, 19, 27, 21, 20, 22],
    [0, 25, 27, 26, 34, 28, 27, 39],
    [0, 42, 45, 48,  0, 52, 80, 120]
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

function zone_create(){
    for( var i=0; i< zone_name.length; i++){
        for(var k=0; k< zone_name[i].length; k++){

        }
    }
}

$(function(){
    zone_create();
});


