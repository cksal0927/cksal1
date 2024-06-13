// todo.js

// $(function(){
//     $("#enroll").click(enroll);
//     $("#work, #state").keyup(function(){
//         if( ($("#work").val().length >= 1) && ($("#state").val().length >= 1) ){
//             $("#enroll").removeAttr('disabled');
//         }else if( ($("#work").val().length >= 1) || ($("#state").val().length >= 1) ){
//             $("#enroll").attr('disabled', 'disabled');
//         }else{
//             $("#enroll").attr('disabled', 'disabled');
//         }
//     });
// })

// function enroll(){
//     var work = $("#work").val();
//     var time = $("#time").val();
//     var state = $("#state").val();
//     if( ( state === "완료") || ( state === "진행중") ){
//         $(".todoState").append(`<br> ${state}`);
//     }else{
//         alert("완료 또는 진행중으로 입력하세요.");
//         $("#state").focus();
//         return;
//     }
//     $(".todo").append(`<br> ${work}`);
//     $(".todoTime").append(`<br> ${time}`);
// }

