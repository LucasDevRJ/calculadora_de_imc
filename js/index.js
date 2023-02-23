function calcularImc() {
	var alturaDigitada = document.getElementById("altura");
	var pesoDigitado = document.getElementById("peso");

	var altura = alturaDigitada.value;
	var peso = pesoDigitado.value;

	var resposta = document.getElementById("resposta");

	console.log(altura);
	console.log(peso);

	var imc = peso / (altura * altura);
	var imcFormatado = imc.toFixed(2);

	console.log(imc);

	resposta.textContent = "O IMC calculado equivale a " + imcFormatado;
}