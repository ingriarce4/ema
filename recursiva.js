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