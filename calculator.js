(function(){
    let screen =document.querySelector('.screen');
    let buttons =document.querySelectorAll('.btn');
    let hello =document.querySelector('.why');
    let result =document.querySelector('.hey');


    buttons.forEach(function(a){
        
        a.addEventListener('click',function(e){
            console.log(screen)
                let a =e.target.innerHTML;
                // let value =e.target.dataset.num;
                screen.value +=a; 
                
        
        })
    });
  
    result.addEventListener('click',function(a){
        if(screen.value===""){
            screen.value="Please enter";
         }else{
            let answer =eval(screen.value);
            screen.value=answer;
        
         }
     })
    hello.addEventListener('click', function(e){
        screen.value ="";
    })


})();

