// board.js

const zone_name=[
    ["출발","김포","의정부","파주","시흥","평택","김해","안양"],
    ["무인도","안산","전주","천안","포항","남양주","부천","청주"],
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
    
];
const special_func = [ // 모서리 구역의 기능

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