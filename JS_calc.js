$(document).ready(function(){
//Input storage to calculate later;
var inputs = [""];
//Storing current string;
var totalString;
//Operators validation array without the '.';
var operators1 = ["+", "-", "/", "*"];
//Opearots array with the '.';
var operators2 = ["."];
// Validation string;
var nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
	console.log("Duplicat dot error!");
}
else if (inputs.length===1 && operators1.includes(input)===false){
inputs.push(input);
}
else if (operators1.includes(inputs[inputs.length-1])===false){
	inputs.push(input);
}
else if (nums.includes(Number(input))){
	inputs.push(input);
}
update();
}

function update(){
	totalString = inputs.join("");
	$("#step").html(totalString);
}

function getTotal(){
totalString = inputs.join("");
$("#step").html(eval(totalString));
}

$("a").on("click", function(){
if(this.id==="ac"){
	inputs=[""];
	update();
}
else if (this.id==="ce"){
	inputs.pop();
	update();
}
else if (this.id==="total"){
	getTotal();
}

else {
	if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")===-1){
		getValue(this.id);
	}
else {
	getValue()
}
}
});

});