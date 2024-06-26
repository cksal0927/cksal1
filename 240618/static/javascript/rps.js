// rps.js

const com = ["scissors.png", "rock.png", "paper.png"];
let record = [];  // 전적 저장
let comHd = 0;  // 컴퓨터 이미지 보이기 위한 setInterval 값
let comSelect = 0;  // 컴퓨터 가위바위보 값

$( function(){  // window.onload - 브라우저 화면 표시 완료
    $("#comImg").attr('src', './static/image/' + com[0])

    $("#game").click( startAndStop );
});

function startAndStop(){
    // $(this) === $("#game")
    if( $(this).text() === '종료' ){  // 가위바위보 진행 중
        $(this).text("시작");
        clearInterval( comHd );  // 컴퓨터 이미지 변경되는 setInterval 종료
        $(".userImg").off('click');  // 종료시 유저 가위바위보 클릭 이벤트 해제
    }
    else{  // 가위바위보 시작 전
        $(this).text("종료");
        comStart = 
        $(".userImg").click( userSelect );  // 유저 가위바위보 클릭 이벤트
    }
}

function userSelect(){
    var idx = $(".userImg").index($(this));  // 내가 클릭한 가위바위보 찾기
    // userImg 클래스들을 배열로 가져오고 그 중에서 몇 번째 인덱스를 클릭했는가?

    $(this).css('border', '1px solid red');  // 내가 클릭한 가위바위보 이미지 표시

    clearInterval( comHd );  // 컴퓨터의 가위바위보 이미지 변경 멈추기 (clearInterval)

    alert( "user : " + idx + "   com : " + comSelect );
    outcome(idx, comSelect());  // 결과 띄우기 (승 패 무)

    comStart();  // 다시 컴퓨터 가위바위보 이미지 변경되게 (setInterval)

    $(this).css('border', '');  // 내가 클릭한 가위바위보 이미지 표시 해제
    // $(this).removeAttr('style');  전체 스타일 해제
}

function outcome(u, c){  // u는 유저 가위바위보, c는 컴퓨터 가위바위보
    // 0 - 가위, 1 - 바위, 2- 보
    var result = "승";

    // 유저와 컴퓨터 가위바위보 비교하여 승 패 무 출력

    $("body").append(`<div class="result"> ${result} </div>`);
}

function comStart(){
    comHd = setInterval( function(){
            if( comSelect == 2 ) comSelect = -1;
            $("#comImg").attr('src', './static/image/' + com[++comSelect]);
        }, 100);  // 지정된 시간에 한 번씩 실행, 시간 단위는 밀리세컨드 1000 = 1초
}
