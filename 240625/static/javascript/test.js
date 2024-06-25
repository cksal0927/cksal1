// test.js

$(function(){
    $("#asquare").on('click', asquareM);
    $("#hyodong").on('click', hyodongM);
    $("#central").on('click', centralM);
});

function asquareM(){
    setTimeout( function(){
        location.href="./asquare.html";
    }, 500);
}

function hyodongM(){
    setTimeout( function(){
        location.href="./hyodong.html";
    }, 500);
}

function centralM(){
    setTimeout( function(){
        location.href="./central.html";
    }, 500);
}