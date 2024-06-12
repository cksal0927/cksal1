// h_w.js


// while문 - 반복횟수가 정해져 있지 않은 경우
// for문 - 반복횟수가 정해져 있는 경우

// innerHTML 은 변수와 비슷하다.
// a=10; a=20; 인 경우에 a 변수에 10이 남아 있지 않는다.

function print(){
    let div = document.getElementById("result");

    div.innerHTML = makeRandom();
}

function makeRandom(){
    let 내용='';
    for(let i=0; i<5; i++){  // 5줄을 표현하기 위한 반복문
        var line = '';
        for(let j=0; j<4; j++){  // 한 줄에 4개씩 숫자를 표현하기 위한 반복문
            let randomNumber = Math.floor(Math.random() * 50) + 1;  // 1~50의 랜덤값
            line = line + ' ' + randomNumber;
        }
        내용 = 내용 + line + '<br>';
    }
    return 내용;
}

window.onload = function(){
    
}