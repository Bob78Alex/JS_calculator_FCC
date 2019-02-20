$(document).ready(function(){
   //User input string
  var inputs=[""];
  //Current input string
  var totalString;
 //Operators array for validation without .
  var operators1 = ["+","-","/","*"];
 //validation
  var operators2 = ["."];
  //Numbers array for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];
  //Adds value to inputs array and checks validation
  function getValue(input){
     if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
      //Validation so it doesn't start with an operator
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //If last character was not an operator add operator to the array
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  function update(){
    totalString= inputs.join("");
    $("#step").html(totalString);
    console.log(inputs);
  }
  function getTotal(){
    totalString = inputs.join("");
    $("#step").html(eval(totalString));
  }
  
  $("a").on("click",function(){
    if(this.id==="ac"){
      inputs = [""];
      update();
    }
    else if(this.id==="ce"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
    }
    else{
      
      //Processing error
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    } 
  });
  
});