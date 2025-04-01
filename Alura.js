function conversor() {
    let valordolar = parseFloat(prompt("Digite um valor"));
    let umdolar = 5.71;
    let valorreal = umdolar * valordolar;
    alert("R$: " + valorreal.toFixed(2));
}
