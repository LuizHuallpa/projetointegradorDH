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