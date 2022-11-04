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
    console.log(x,lambda);
    if (x != Math.round(x)) {
        output.innerHTML = ("La variable 'X' debe ser entera");window.scrollTo(0, 10000);
        return 0;
    }
    if (x < 0 || lambda < 0) {
        output.innerHTML = ("Las variables deben ser mayor a 0");window.scrollTo(0, 10000);
        return 0;
    }
    if(document.getElementById("inputX").value==""||document.getElementById("inputLambda").value=="")
    {
        output.innerHTML = ("Debe ingresar datos validos");window.scrollTo(0, 10000);
        return 0;
    }
    // x = Math.round(x);
    // lambda = Math.round(lambda);
    let resultado = 0;
    resultado = ((Math.pow(lambda, x)) * (Math.pow(Math.E, (lambda) * -1))) / (factorial(x));
    console.log(resultado);
    output.innerHTML = resultado>0.0001 ? `P(X|λ) = ${resultado.toFixed(4)}`:`P(X|λ) = ${resultado}`
    window.scrollTo(0, 10000);

}

borrar = () =>
{
    console.clear();
    document.getElementById("inputX").value = "0";
    document.getElementById("inputLambda").value = "0";
    document.getElementById("resultado").innerHTML = "";
}







 factorial = (num) =>{
    if (num == 0) { return 1; }
    else { return num * factorial(num - 1); }
}