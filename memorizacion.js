/*recursividad*/

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


/*Memorización*/

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