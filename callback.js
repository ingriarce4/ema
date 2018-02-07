// se ejecuta cuando hay algo de tiempo

setTimeout(function callback(){ //primer parámetro recibe una funciión(callback) y segundo el tiempo
 
 console.log ('Ya pasó 1 segundo')
}, 3000)

console.log('hola')

/*2.- ejemplo*/

setTimeout(function callback(){ //primer parámetro recibe una funciión(callback) y segundo el tiempo
 
 console.log ('A')
}, 0)

console.log('B')

//se ejecuta la segunda función porque lo delega en el navegador
// este se encarga de resolver en el tiempo de espera.

/*
3.- caso*/
setTimeout(function callback(){ //primer parámetro recibe una funciión(callback) y segundo el tiempo
 
 console.log ('A')
}, 1000)
//
for (let i =0; i<999999999; i++);
console.log('B')

//no se puede realizar tareas que lleven mucho tiempo de ejecución
//las operaciones que son síncronas tienen que son los menosres posibles.