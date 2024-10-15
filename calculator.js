function calculator() {
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value    
    let operator = document.getElementById("operator").value
    
    let result;

    switch (operator) {
    case "add":
        result=Number(input1) + Number(input2);
    break;
    case "subtract":
        result=Number(input1) - Number(input2);
    break;
    case "mulitiply":
        result=Number(input1) * Number(input2);
        break;
     case "divide":
        result=Number(input1) / Number(input2);
        break; 
     default:
        result = "Invalid operator";        
}
     
    
    let resultTag = document.getElementById("result")
    resultTag.innerHTML = `Result: ${result}`

    

}