const edad = parseInt(prompt("¿Cuál es tu edad?"));
if(edad >= 18){
    alert("Eres mayor de edad, puedes ingresar");
}else{
    alert("Eres menor de edad, entras bajo tu responsabilidad.");
}
const distancia = parseInt(prompt("A que distancia te encuentras en kilometros?"));
if(distancia <= 40){
    alert("El envio es gratis.");
}else{
    alert("El envio es de $800.");
}