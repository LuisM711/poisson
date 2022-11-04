$(document).ready(function () {
    $("button").click(function () {
        var x = $("formulario").serializeArray();
        console.log(x);
    });
});

fn = () => {
    console.clear();
    let x = document.getElementById("inputX").value;
    let lambda = document.getElementById("inputLambda").value;
    let output = document.getElementById("resultado");
    if(x!=Math.round(x))
    {
        alert("Error, la variable 'X' no puede tener decimales");
        return 0;
    }
    // x = Math.round(x);
    // lambda = Math.round(lambda);
    let resultado = 0;
    resultado = ((Math.pow(lambda,x))*(Math.pow(Math.E,(lambda)*-1)))/(factorial(x));
    console.log(resultado);
    output.innerHTML = `P(X|λ) = ${resultado.toFixed(4)}`;
    
}









function factorial(num) {
    if (num == 0) { return 1; }
    else { return num * factorial(num - 1); }
}