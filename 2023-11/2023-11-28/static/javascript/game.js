let board= new Array();

// 중복없이 25개 숫자 저장하기
for( var i=1; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if( board.indexOf(tmp) == -1)
        board.push(tmp);
    else
        i--;
}

for(var i=0; i<board.length; i++)
    var v=board[i];

$(function(){

    $(".modal_bg").on("click",function(){
        $("#result_modal").hide();
    });

    $.each($(".n"),function(i){
        $(this).text(i+1);
        $(this).data("color","false");
    })
    $(".n").on("click",function(){
        if($(this).data("color") == "false"){
            $(this).css("background","pink");
            $(this).data("color","true")
        }else{
            $(this).css("background","white");
            $(this).data("color","false")
        }
    });

    $.each( board , function(i,v){  // i-인덱스, v- 배열값
        $(".numBox").eq(i).text( v );
    });

    $(".numBox").on("click",function(){
        $(this).css("background","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        $(".n").eq(board[idx]-1).css("background","pink");
        $(".n").eq(board[idx]-1).data("color","true")
        board[idx]=0;
        endgame();
    });

});


function endgame(){
    var row=0, col=0, end=0, cross=[0,0];
    for(var i=0; i<5 ; i++  ){ // 빙고 확인하기
        for( var k=0; k<5 ; k++ ){
            if( board[i*5+k]==0) row++; // 가로방향으로 5줄 전부확인
            if( board[k*5+i] ==0) col++; // 세로방향 5열 전부확인
        }
        if( board[i*6] == 0 ) cross[0]++; // 왼->오 대각선
        if( board[ (i+1)*4 ]==0) cross[1]++; // 오->왼 대각선
        if(cross[1]==5)end++;
        if( cross[0]==5) end++;
        if( row==5) end++;
        if( col==5 ) end++;

        row=0; // 한줄씩 확인 할 때 마다 0개 부터 확인해야하므로 초기화
        col=0; // 1열씩 확인 할 때 마다 0개 부터 확인해야하므로 초기화
    }

    if ( end==5 ){  // 5줄 빙고 완성
        $("#result_modal").show(); // $("#result_modal").css("display","block");
        $(".result").text("5줄 빙고 완성");
    }else if( end >=6 ){ // 빙고 실패
        $("#result_modal").show();
        $(".result").text("빙고실패");
    }

}