let form = selectId('contactForm');
let menssagem = selectId('message');
let nome = selectId('name');
let email = selectId('email');
let assunto = selectId('subject');
let errorList = document.querySelector('#error-list ul');
let errorListdiv = selectId('error-list')


function selectId(id) {
    return document.getElementById(id);

}

function empty(input){
    return input.value.trim() === "";
}

function errorMessage(message){
    errorList.innerHTML += "<li>" + message + "</li>";
}




form.addEventListener("submit", function(e){

    errorList.innerHTML = '';
    

    if (empty(nome)) {
        errorMessage("Campo <strong>Nome</strong> não preenchido");
    }
    if (empty(menssagem)) {
        errorMessage("Campo <strong>menssagem</strong> não preenchido");
    }

    if (empty(email)) {
        errorMessage("Campo <strong>email</strong> não preenchido");
    }

    if (empty(assunto)) {
        errorMessage("Campo <strong>assunto</strong> não preenchido");
    }

console.log(errorList.querySelector('li').length)

    if (errorList.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorListdiv.hidden = '';
        
    }


});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }





// $(function() {
//     var selectedClass = "";
//     $(".filter").click(function(){
//     selectedClass = $(this).attr("data-rel");
//     $("#gallery").fadeTo(100, 0.1);
//     $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
//     setTimeout(function() {
//     $("."+selectedClass).fadeIn().addClass('animation');
//     $("#gallery").fadeTo(300, 1);
//     }, 300);
//     });
//     });