//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” 
// al posto del numero e per i multipli di 5 stampi Buzz. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 

// Devo Stampare  i 100 numeri:
var miaLista =[];

for (var i=1; i <= 100; i++){

    if (i % 15 == 0){ //se divisibile per 3 e anche per 5 stampa "FizzBuzz"
    
        console.log("FizzBuzz");
        miaLista.push("FizzBuzz");
    
    }else if (i % 5 == 0){//Se divisibile per 5 stampa "buzz"

        console.log("Buzz");
        miaLista.push("Buzz");
    
    }else if ( i % 3 == 0){//se divisibile per 3 stampa "Fizz"
        
        console.log("Fizz");
        miaLista.push("Fizz");
    }else{ // altrimenti stampa il numero normale
        
        console.log(i);
        miaLista.push(i);
    }     
}

//stampo i numeri:
console.log(miaLista);
alert("ECCO LA LISTA FIZZBUZZ: " + miaLista);