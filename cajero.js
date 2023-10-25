var usuario = prompt("ingrese su usuario");
var contrasenia = prompt("ingrese su contraseña");
if (usuario === "jorgemoares" && contrasenia === "adivinala") {
    sesionIniciada = true;

    alert("Iniciaste sesión correctamente.");
    var saldo = 100000;
    var maximoRetiro = 50000;

    alert("Tu saldo es de: $" + saldo);}

if (sesionIniciada) {
    var cantidadDeposito = parseInt(prompt("ingrese la cantidad de dinero a depositar. Ingrese 0 si no desea depositar dinero"));
    if (cantidadDeposito > 0) {
        saldo = saldo + cantidadDeposito;
        alert("Depositó :" + cantidadDeposito + ". Su saldo ahora es de : " + saldo);
    } else {
        alert("Ud. no desea depositar dinero.");
    }
    var cantidadRetiro = parseInt(prompt("ingrese la cantidad de dinero a retirar"));
    alert("Máximo a retirar posible: " + maximoRetiro);
    if (cantidadRetiro > 0 && cantidadRetiro <= maximoRetiro) {
        saldo -= cantidadRetiro;
        alert("Retiro exitoso. Saldo actual: " + saldo);
    } else if (cantidadRetiro > saldo) {
        alert("El retiro excede el saldo disponible");
    } else if (cantidadRetiro <= 0) {
        alert("La cantidad a retirar no es válida.");
    } else {
        alert("Fondos insuficientes para realizar el retiro.");
    }
} else {
    alert("Usuario o contraseña incorrectos.");
}
