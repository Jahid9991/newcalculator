let results = document.getElementById('result');
//to get input
let encountered = false;


//get value from buttons
function setVal(value){
  if( encountered && !isNaN(value)){
    results.value= "";
  }
  results.value+=value;
  encountered = false;
}


function clearValue(){
  results.value= "";
  encountered = false;
}

function result(){
  finalResult = results.value.replace('^','**');
  try {
    finalResult = eval(finalResult);
    results.value = finalResult;
  } catch (err) {
    results.value = "Syntax Error..."
  }
  encountered = true;
}

function del(){
  finalResult = results.value.substring(0,results.value.length-1);
  results.value = finalResult;
}
