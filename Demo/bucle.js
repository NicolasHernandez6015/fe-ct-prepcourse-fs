var suma = 0
/* suma = suma +1;
console.log(suma) */

/* for (var i=0 ; i<5 ; i++){
    suma = suma + i
    console.log("Variable de interación", suma);
} */

/* while(suma < 6) {
    suma = suma + 1;
    console.log(suma)
} */

/* var array = [9, 89, 6, 12]
var elemento = 6
function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
array.push(elemento);
return array
       
    };


console.log(incrementarPorUno(array)) */

// JOIN
/* var palabraSeparada =['Hello', 'world!'] 
var palabraArreglada = palabraSeparada.join(' ');

console.log(palabraArreglada); */


/* var elemento = 6
function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
array = array.join("+");
return array
       
    }; */
/*     var suma = 0 
  array =  array.forEach(  (num, i) => { suma += num ;}
        )
        
    console.log(suma) */


/*     function promedioResultadosTest(resultadosTest) {
        // El parámetro "resultadosTest" es un arreglo de números.
        // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
        // Tu código:
        let sumatoria = 0
        let promedio = 0
        for (let i = 0 ; i < resultadosTest.length ; i++) {
           sumatoria += resultadosTest[i];
           promedio = sumatoria / resultadosTest.length;
           }return promedio;
    }

console.log(promedioResultadosTest(resultadosTest))
//Marzo"

var array = ["Noviembre", "Enero", "Marzo"]
/* function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    for (let i = 0 ; i < array.length; i++){
      if(array[0] == array[i+1]) {
        return true
    }    else {
       return false;
    }
 }
}
 console.log(todosIguales(array))
 */
/*  var array = ["Noviembre", "Enero", "Marzo"]

 console.log (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) */
/*  let x = []
 for (let i = 0 ; i <= 10 ; i++) {
    x.push(i*6)
 }
 console.log(x)
 */
let num = 79876
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    num = num.toString();
    return num[0] == 9
 }  console.log(empiezaConNueve(num))