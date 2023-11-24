let image = ["두리안.jpg","람부탄.jpg" , "망고.jpg","바나나.png", "배.jpg",
"수박.jpg","용과.jpg","자두.jpg"];

let board= new Array(); // 게임판

let box=0;

$(function(){
    box = $(".pic").length;

    for( var i=1; i <= parseInt(box/2); i++ ){
        var tmp = new Array();
        for(var k=1; k <= parseInt(box/2); k++){
            var t = Math.floor(Math.random()*parseInt(box/2));
            if( tmp.indexOf(t) == -1 )
                tmp.push(t);
            else
                k--;
        }
        board.push(tmp); 
    }

    for( var i=0; i< board.length; i++){
        for( var k=0; k< board[i].length; k++){
            $(".pic").eq( i * board[i].length + k ).
                find("img").attr("src","./static/images/"+image[board[i][k]]);
        }
    }

});