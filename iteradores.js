/*iteradores permite hacer listas infinitas de elementos, más que arrays
 */

 function fibonacci(){
 	let a=0, b=1         //retorna un objeto ala que le voy pidiendo númrss
 	return{  //retorna un objeto
 		next: function(){ //recuerda el estado de las variable 
 			let f= a
 			a=b
 			b= f + a
 			return {value: f, done:false}
 		}
 	}
 }

const fibo= fibonacci()
fibo.next().value //0  //es un objeto que tiene 1 método nex. Nos devuelve 2 cosas si termina o no y valor
fibo.next().value //1
fibo.next().value //1
fibo.next().value //2
fibo.next().value //3
fibo.next().value //5
fibo.next().value //8
fibo.next().value //13


/*2.- hacer ciclo for*/

let i= 0     //se utiliza para finalizar el ciclo
for (let value of fibo){
	console.log(value)
	i++
	if (i>20) break 
}
