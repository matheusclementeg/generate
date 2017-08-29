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
		`Entenda como o/a ${input} pode alavancar seus resultados!`,
		`O que não te falaram sobre o/a ${input} e você deveria saber!`,
		`Quer ganhar mais dinheiro? A/o ${input} pode te ajudar!`,
		`${input}: tudo que sua empresa precisa!`,
		`${input} pode não ser mais um diferencial`,
		`Quer aprender mais sobre ${input} mas não sabe por onde começar?`,



	];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("escreve").innerHTML=rand;
	if (rand.length > 38) {

		rand = rand.substring(0,38);
		swal({ html:true, title:'Ops!' + ' Tem certeza? Vai ficar assim:',text: `${rand}...`, type:'error', }); 
	}
}

function random(){
	input.addEventListener("keypress", function(e){
  		if (e.which == 13) {
	    	teste();
	  	}
	})
}