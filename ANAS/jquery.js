$(document).ready(function(){
    $('#btn_insert').click(function(){
        var number1=$('#input_val').val();

     if( number1 % 2 ===0){
        console.log("even")
     }

     else{
        console.log("odd")
     }
})
});