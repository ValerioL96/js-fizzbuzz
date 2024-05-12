
//Scrivi un programma che stampi in console i numeri da 1 a 100:

  //incomincio creando un ciclo (contatore; condizione; incremento/decremento):
  
     for(let i = 1; i <= 100; i++){
        console.log(i);
     }


//L'esercizio mi pone delle condizioni:
  
    // per i multipli di 3 stampi “Fizz” al posto del numero:

      if( i % 3 == 0 ){
        const multiplesOfThree = 'Fizz';
        console.log(multiplesOfThree);
      }

    // per i multipli di 5 stampi “Buzz”:
      
      else if(i % 5 == 0){
        const multiplesOfFive = 'Buzz';
        console.log(multiplesOfFive);
      }

   