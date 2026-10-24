/*--------------------------------------Soma-------------------------------------------*/

if (document.forms['SomaNotas']) {

document.forms['SomaNotas'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('nota1').value);
    var n2 = Number(document.getElementById('nota2').value);
    var n3 = Number(document.getElementById('nota3').value);

    document.getElementById('total').value = Number(n1) + Number(n2) + Number(n3);
});

}

/*--------------------------------------Subtracao-------------------------------------------*/

if (document.forms['SubtracaoNotas']) {

document.forms['SubtracaoNotas'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('nota1').value);
    var n2 = Number(document.getElementById('nota2').value);
    var n3 = Number(document.getElementById('nota3').value);

    document.getElementById('total').value = Number(n1) - Number(n2) - Number(n3);
});

}

/*--------------------------------------Média-------------------------------------------*/

if (document.forms['MediaNotas']) {

document.forms['MediaNotas'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('nota1').value);
    var n2 = Number(document.getElementById('nota2').value);
    var n3 = Number(document.getElementById('nota3').value);

    document.getElementById('total').value = (Number(n1) + Number(n2) + Number(n3)) /3;
});

}

/*--------------------------------------Multiplicação-------------------------------------------*/

if (document.forms['Multiplicacao']) {

document.forms['Multiplicacao'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var n3 = Number(document.getElementById('n3').value);

    document.getElementById('total').value = (Number(n1) * Number(n2) * Number(n3));
});

}

/*--------------------------------------Divisão-------------------------------------------*/

if (document.forms['Divisao']) {

document.forms['Divisao'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);

    document.getElementById('total').value = (Number(n1) / Number(n2));
});

}

/*--------------------------------------Raiz-------------------------------------------*/

if (document.forms['Raiz']) {

document.forms['Raiz'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('n1').value);   

    document.getElementById('total').value = Math.sqrt(n1);
});

}

/*--------------------------------------Expoente-------------------------------------------*/

if (document.forms['Expoente']) {

document.forms['Expoente'].addEventListener('submit', function(event) {
event.preventDefault();

    var n1 = Number(document.getElementById('n1').value);   
    var n2 = Number(document.getElementById('n2').value);   

    document.getElementById('total').value = n1 ** n2;
});

}