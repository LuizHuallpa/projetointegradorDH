function selectId(id) {
    return document.getElementById(id);

}

let menssagem = selectId('message');
let nome = selectId('name');
let email = selectId('email');
let assunto = selectId('subject');

menssagem.addEventListener("submit", function(e) {
    e.preventDefault();
    if (menssagem.value === "") {
        alert('Campo não preenchido')
    }
})



$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });