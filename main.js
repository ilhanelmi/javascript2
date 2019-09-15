

let button = document.querySelector("#btn");


button.addEventListener("click", buttonclicked);

function buttonclicked(){
let tal1 = parseInt(document.querySelector(".tal1").value);


let tal2 = parseInt(document.querySelector(".tal2").value);

let operator = document.querySelector("#operator").value;

udregn(tal1, tal2, operator);

}

function udregn(tal1, tal2, operator){

let result;

if(operator == "plus"){

	result = tal1+tal2;


}else if (operator =="minus"){

result = tal1 - tal2;


}else if (operator == "gange"){

result = tal1 * tal2;


}else{
	
	result = tal1 / tal2;
}

let elementResult = document.querySelector(".result");

elementResult.innerHTML = result;


}