let form = selectId('contactForm');
let menssagem = selectId('message');
let nome = selectId('name');
let email = selectId('email');
let assunto = selectId('subject');
let errorList = document.querySelector('#error-list ul');
let errorListdiv = selectId('error-list')
let containerTempo = document.querySelector("#previsaodotempo");




function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function selectId(id) {
    return document.getElementById(id);

}

function empty(input) {
    return input.value.trim() === "";
}

function errorMessage(message) {
    errorList.innerHTML += "<li>" + message + "</li>";
}




form.addEventListener("submit", function (e) {

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

    if (errorList.querySelectorAll('li').length > 0) {
        e.preventDefault();
        errorListdiv.hidden = '';

    }


});







async function getTempo() {
    let resposta = await fetch("https://api.hgbrasil.com/weather?format=json-cors&key=b3245de1&city_name=Campinas,SP");
    let tempoLista = await resposta.json();

    let tempo = tempoLista.results;
    console.log(tempo)

    if (tempo.temp >= 20) {
        let divTempo = `
        
    <p>Neste momento está <strong>${tempo.temp} graus</strong>!</p>
    <img src="https://media.giphy.com/media/IeXeDDIxGrprESmSBT/giphy.gif">
    <p> Ótimo pra tomar uma bem gelada!</p>
    `
    containerTempo.innerHTML = divTempo;

        
    } else {
        let divTempo = `
    <p>Neste momento está <strong>${tempo.temp} graus</strong>!</p>
    <img src="https://media.giphy.com/media/gFJiaIGgA5T8guT2KA/giphy.gif">
    <p> Que tal pegar uma coxinha ou uma porção bem quentinha?</p>

    `
    containerTempo.innerHTML = divTempo;

        

    }

    
}

getTempo()