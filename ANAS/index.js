$(document).ready(function(){
  $('#btn_insert').click(function(){
    var number1=$('#input_val').val();


    for(let i=1;i<11;i++){
        let table= i*number1

        console.log(table)
    }
  }) ;
});

