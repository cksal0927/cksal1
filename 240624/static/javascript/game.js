// game.js

function timeStart(){
    setInterval( function(){
        time++;
        $("#step").text(`${time}초`);
    }, 1000);
}

let clickStop = true;

function imgClick(){
    if( !clickStop ) return;  // 두 번 이상 연속 클릭 방지
}

function imgClick(){
    var idx = $(".item").index($(this));  // 몇 번째 div 클릭했나? 인덱스
    var $clickImg = $(".item").eq(idx).find("img");  // 클릭한 div의 img태그

    // 클릭한 이미지 화면에 표시
    $clickImg.removeClass("hide");
    $clickImg.addClass("select");

    // 현재 회면에 클릭해서 보이는 이미지는 imgPlace배열의 값이 인덱스이고
    // imgName배열의 인덱스 위치의 이미지가 보이는 것이다.
    // imgPlace[1]에 3이 있다면 imgName[3]의 이미지가 보이는 것이다.
    // selectImg에 클릭한 이미지의 인덱스와 div태그의 인덱스 저장
    if( selectImg.length == 1 ){
        if( selectImg[0].div == idx )  return;  // 이미 클릭한 이미지를 다시 클릭했을 때 진행되지 않게
    }
    selectImg.push( { 이미지:imgPlace[idx], div:idx } );

    // 클릭한 이미지가 두 개라면 비교하기
    if( selectImg.length == 2 ){
        clickStop = false;
        if( matching() ){  // 두 개의 이미지가 같다.
            // 같은 이미지이기 때문에 빨간 테두리 제거 - select클래스 제거
            $(".item").eq(selectImg[0].div).find("img").removeClass("select");
            $(".item").eq(selectImg[1].div).find("img").removeClass("select");
            // 해당 이미지들 클릭 이벤트 해제
            $(".item").eq(selectImg[0].div).off("click");
            $(".item").eq(selectImg[1].div).off("click");

            selectImg = [];  // 두 개의 이미지 비교가 끝났기 때문에 다음을 위해 초기화

        }else{  // 두 개의 이미지가 같지 않다.

            // 서로 다른 이미지, 1초 뒤에 두 개의 이미지 감추기
            setTimeout( function(){
                $(".item").eq(selectImg[0].div).find("img").removeClass("select");
                $(".item").eq(selectImg[1].div).find("img").removeClass("select");
                $(".item").eq(selectImg[0].div).find("img").addClass("hide");
                $(".item").eq(selectImg[1].div).find("img").addClass("hide");
                selectImg = [];  // 두 개의 이미지 비교가 끝났기 때문에 다음을 위해 초기화
                clickStop = true;
            }, 1000);
        }
    }
    updateState();
}

function updateState(){
    clickCount++;
    $("#score").text(`점수 : $(score)점`);
    $("#click").text(`클릭 횟수 : ${clickCount}/30`);

    if( clickCount == 31 ){
        $(".item").off("click");
        alert( "횟수 초과로 게임 오버" );
    }
}

function matching(){  // 두 개의 클릭한 이미지 비교하기 함수
    if( selectImg[0].이미지 === selectImg[1].이미지 )
        return true;
    else
        return false;
}