

let slide_idx=0;


$(function(){
    // $(".menuList>.menuItem").on("mouseover",function(){
    //     $(this).children(".subMenu").slideDown();
    //     // show(), hide(), toggle();
    //     // fadeIn(), fadeOut(), fadeToggle();
    //     // slideDown(), slideUp(), slideToggle();
    // });
    
    // $(".menuList>.menuItem").on("mouseout",function(){
    //     $(this).children(".subMenu").slideUp();
    // });


    // 슬라이드이미지 구현
    $(".leftBt").on("click",function(){
        if( slide_idx != $(".slideImg").length-1 ){ //마지막 이미지 일 경우 이동불가
            slide_idx++;
            $(".slideList").css("right",(slide_idx*1200)+"px" );
        }
    });

    $(".rightBt").on("click",function(){
        if(slide_idx!=0){  // 첫번째 이미지 일 경우 이동불가
            slide_idx--;
            $(".slideList").css("right",(slide_idx*1200)+"px" );
        }
    });

    // 자동 슬라이드 이미지
    // 시간을 제어
    // setTimeout - 지정한 시간이후 단한번 동작 , 
    // setInterval - 지정한 시간 간격으로 동작

    // setInterval( 실행할 내용(함수),  시간(밀리세컨드) );
    setInterval(
        function(){
            if( slide_idx != $(".slideImg").length-1 ){ //마지막 이미지 일 경우 이동불가
                slide_idx++;
                $(".slideList").css("right",(slide_idx*1200)+"px" );
            }else{
                slide_idx=0;
                $(".slideList").css("right",(slide_idx*1200)+"px" );
            }
        } , 5000
    );

});

// function save(){   }