let uno: number = 1;
let dos: number = 2;
let cuatro: number = 4;
let result: number = uno + dos + cuatro;

console.log(result);

let clima = document.getElementById("clima");
let enviar = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "please write: ";

enviar.addEventListener("click", () => {
  console.log("the wheater in your city is: ", clima.value);

  let raining: boolean = true;
  let sunny: boolean = false;

  if (raining) {
    if (sunny) {
      console.log("go in run");
    } else {
      console.log("watch tv");
    }
  }
});
