let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let emailct = document.querySelector('#emailct');

function confirmctt(){
   
    if(emailRegex.test(emailct.value)){
        Swal.fire({
            title: "Enviado!",
            text: "Nossa equipe entrará em contato!",
            icon: "success"
          });
        
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Digite um email valido!",
           
          });
    }

}


let checkBoxes = document.querySelectorAll("#checkbox")




function validlist(){
    checkBoxes.forEach (function(el)
    {if(el.checked){
        Swal.fire({
            title: "Sucesso",
            text: "Agora insira seu email",
            icon: "success"
          });}
          setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/pages/contato.html'
        }, 2000)
    
    })
    
}


    


   

    