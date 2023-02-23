function calcularImc() {
	var alturaDigitada = document.getElementById("altura");
	var pesoDigitado = document.getElementById("peso");

	var altura = alturaDigitada.value;
	var peso = pesoDigitado.value;

	var textoResposta = document.getElementById("resposta");
	var textoClassificacao = document.getElementById("classificacao");

	console.log(altura);
	console.log(peso);

	var imc = peso / (altura * altura);
	var imcFormatado = imc.toFixed(2);

	console.log(imc);

	var classificacao;

	if (imc < 18.5) {
		classificacao = "Magreza";
	} else if (imc < 24.9) {
		classificacao = "Normal";
	} else if (imc < 29.9) {
		classificacao = "Sobrepeso";
	} else if (imc < 39.9) {
		classificacao = "Obesidade";
	} else {
		classificacao = "Obesidade Grave";
	}
 
	textoResposta.textContent = "O IMC calculado equivale a " + imcFormatado;
	textoClassificacao.textContent = "Classificacao: " + classificacao;
}