function teste() {
	var input = document.getElementById("input").value;  
	var myArray = [
		`7 verdades sobre ${input}`, 
		`Tudo que você precisa saber sobre ${input}`, 
		`Como ${input} pode ajudar a sua empresa`,
		`4 benefícios da/do ${input} para a sua empresa`,
		`Mitos e verdades sobre ${input}!`,
		`${input} é importante?`,
		`Não conhece ${input}? Talvez você esteja perdendo dinheiro!`,
		`${input}: saiba como fazer de forma eficiente!`,
		`3 formas de fazer ${input} de maneira eficiente!`,
		`${input}: 5 erros que você não pode cometer!`,
		`${input}: tudo o que você NÃO deve fazer para vender mais!`,
		`Entenda como ${input} pode alavancar seus resultados!`,
		`O que não te falaram sobre ${input} e você deveria saber!`,
		`Quer ganhar mais dinheiro? ${input} pode te ajudar!`,
		`${input}: tudo que sua empresa precisa!`,
		`${input}: entenda porque sua empresa precisa!`,
		`Saiba como otimizar ${input} na sua empresa!`,
		`${input} na sua empresa: nós podemos te ajudar!`,
		`${input} pode não ser mais um diferencial`,
		`Quer aprender mais sobre ${input} mas não sabe por onde começar?`,
		`4 dicas matadoras para fazer ${input} com qualidade!`,
		`Quer ganhar mais dinheiro? ${input} pode te ajudar! 🤑`,
		`${input} em sua empresa: você está fazendo isso corretamente?`,
		`$Somos especialistas em ${input} e podemos te ajudar!`,
		`Terceirizar ou não seu/sua ${input}? Descubra a melhor opção!`,



	];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("escreve").innerHTML=rand;
	/*if (rand.length > 38) {

		rand = rand.substring(0,38);
		swal({ html:true, title:'Ops!' + ' Tem certeza? Vai ficar assim:',text: `${rand}...`, type:'error', }); 
	}*/
}
function checkbox(){
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

if (button1.checked){
    var input = document.getElementById("input").value;  
	var myArray = [
		`4 dicas matadoras para fazer ${input} com qualidade!`,
		`Quer ganhar mais dinheiro? ${input} pode te ajudar! 🤑`,
		`${input}: você conhece bem?`,
		`Quer saber mais sobre ${input} mas não sabe por onde começar?`,
		`7 verdades sobre ${input}`, 
		`Tudo que você precisa saber sobre ${input}`, 
		`Como ${input} pode ajudar a sua empresa`,

	];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("escreve").innerHTML=rand;
}
else if (button2.checked) {
    var input = document.getElementById("input").value;  
	var myArray = [
		`Saiba ${input} é importante para a sua empresa!`,
		`${input}: entenda porque sua empresa precisa!`,
		`4 benefícios da/do ${input} para a sua empresa`,
		`Entenda como ${input} pode alavancar seus resultados!`,
		`${input} em sua empresa: você está fazendo isso corretamente?`,
		`Terceirizar ou não seu/sua ${input}? Descubra a melhor opção!`,

	];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("escreve").innerHTML=rand;
}
else if (button3.checked) {
    var input = document.getElementById("input").value;  
	var myArray = [
		`Saiba como otimizar ${input} na sua empresa!`,
		`${input} na sua empresa: nós podemos te ajudar!`,
		`${input}: tudo que sua empresa precisa!`,
		`$Somos especialistas em ${input} e podemos te ajudar!`,


	];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("escreve").innerHTML=rand;
}
else if (button4.checked) {
    teste();
}
}
function random(){
	input.addEventListener("keypress", function(e){
  		if (e.which == 13) {
	    	oi();
	  	}
	})
}
