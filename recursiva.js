/*funciones recursivas usando el fibonacci*/
/*0, 1,1,2,3,5,8,13...*/
/*primeros dos nueros -- caso base*/

function fibonacci (num){	
	if (num == 1) return 0  //compara el numero que llega por parámetro
	if (num == 2) return 1
	return fibonacci (num -1) + fibonacci(num-2)
}
// recursividad es una función que se llama así misma dentro 
// de la función

fibonacci(1) //0
fibonacci(2) //1
fibonacci(3) //1
fibonacci(4) //2
fibonacci(5) //3
fibonacci(6) //5
fibonacci(7) //8
fibonacci(8) //13
/*
2.- la anterior funcion tiene un problema */
let contador= 0
function fibonacci (num){	
	if (num == 1) return 0  //compara el numero que llega por parámetro
	if (num == 2) return 1
		contador ++
	console.log(contador)
	return fibonacci (num -1) + fibonacci(num-2)
}

//esto me genera un problem 

fibonacci(8) = fibonacci (6) + fibonacci (7)

/*3.- En el ejercicio anteriorm se llama muchas veces a los fibonacci*/
//ahora implementando memorización

let contador= 1
function fibonacci (num, memoria={}){
	contador++
	//hay que ver si esta memoria tiene algo 
	if (memoria[num]){
		// si esta definido se calcula este número
		return memoria[num]
	}
	if (num == 1) return 0  //compara el numero que llega por parámetro
	if (num == 2) return 1
		//la cuenta que estamos haciendo la guardamos en la memoria
	return memoria[num] = fibonacci (num -1, memoria) +  // si no se agrega memoria agrega un objeto vacío
		fibonacci(num-2, memoria)
} 

//en la consola aparece que se llamó el contador 38 veces





