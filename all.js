// (esistono due variabili, let può essere sempre cambiata const è costante)
// (la variabile è un contenitore che contiene valori di tipo :)
//(let or const) + (nome variabile) (= valore)
       let            mionome        = "Gio"; //(tipo string)
       let             eta           =  29  ; //(tipo numerico)
       let           maggiorenne     = true ; //(tipo booleano)
       let            niente         = ""   ; //(tipo undefined)

//verificare i tipi di contenuti

console.log;                      // ti permette di stampare in terminale il codice java.

                                  // nelle tonde si può inserire un selezionatore (typeof)
console.log(typeof (mionome));    // che ti permette esaminare in questo caso il tipo della riga


// ovviamente possiamo utilizza la matematica per unire delle stringhe 


let totale = mionome + eta ;      // usando l'addizione si posso concatenare anche numeri e stringhe
console.log (totale);             // esempio qui sarà Gio (nome) + 29 (età) la definisco piccola function

let prova = [1,"due","tre","ops",true,38];  // questo è un array,(in poche parole contenitore di un contenitore) a differenza della var può contenere divrsi valori
        //  [0,  1  ,  2   ,  3  , 4  ,5];  // Come vengono viste le stringe da js
console.log (prova[3]);                     // funziona allo stesso modo. per selezionare quello da mostrare basta inserirlo nella [ ] definendo la stringa


// ci sono 3 diversi motedi di conversione 
// Esempio 1
let converti = true;                     // stabilire variabile  (tipo booeliano) 
console.log (typeof(Number)(converti));   //  conversione e check del tipo 
// Esempio 2
let converti1 = true;                    // stabilire variabile  (tipo booeliano) 
converti1 = String(true);                //  metodo conversione
console.log(typeof(converti1));           // check del type
// Esempio 3
let converti2 = (true).toString();       //stabilre variabile (tipo booeliano)+ conversione
console.log(typeof(converti2)); 

 // Metodi di comparazione

 let comparazione = 1;                            // mettiamo in comparazione queste variabili
 let comparazione1 = true;
 let comparazione2 = 1;

 console.log (comparazione == comparazione1);    // (==) mettono in confronto il valore,quidni in questo caso il valore di 1 è uguale a true(1)
 console.log (comparazione === comparazione1);   // (===) mettono in confronto valore e tipo di stringa (false a causa dei tipi diversi)
 console.log (comparazione === comparazione2);   // (===)   //                                          (true perche hanno lo stesso valore e tipo)
 console.log (comparazione !== comparazione2);   // (!==) con il ! è mettere una negazione quindi in questo caso !== significa NON è uguale (false)
 // Maggiore e Minore 
 let numMaMi = 4                                 // 
 let maggioreVar = numMaMi >3;                   //si può creare una variabile utilizzandone un'altra e comparandola ad un altro elemento > (maggiore) quindi true
 let minoreVar = numMaMi< 3;                     // (minore) quindi false per questo caso
 let maggioUguale= numMaMi <= 4;                 // (minore) o (uguale) quindi in questo caso true
 console.log (maggioreVar);
console.log (maggioUguale);

                                                // Operatori logici 

// OPERATORE (AND) &&


 let provaope = 1 == 1 ;                            //variabile di comparazione (true)
 let provaope1 = 1== 2 ;                            // variabile di comparazione (false)
 console.log (provaope);                                
 console.log (provaope1);
 console.log (provaope &&provaope1);                // (Stamperà FALSE) perchè L'operatore && (e) per stampare true, entrambe le condizioni devono essere true 

 // OPERATORE (OR) ||
 console.log (provaope || provaope1);                // (Stampera TRUE) perchè L'operatore || (or) ha bisogno che almeno 1 delle 2 condizioni sia true  




 let numTern = 7;                                                    // variabili universali
 let condizionA = numTern < 5;                                             //
 let condizionB = numTern > 2;


 // OPERATORE TERNIANIANO (?)


 let ternsemplice = numTern === 7 ? "certo che è uguale" : "non lo è"; // (?) serve a creare una domanda. in caso in cui il risultato sia true  stamperà la 1 stinga in caso sia false la 2   
 let stringaTern = condizionA && condizionB ? "è veroooo" : "è faaaaalso"; // quindi andiamo ad utilizza && e l'operaotre terniano
 let num1Tern = numTern == undefined || numTern === 7 ?  numTern * 7 :"è faaaalso"; // e qui in caso sia true moltiplica per 7
 console.log (ternsemplice)
 console.log(stringaTern)
console.log (num1Tern)

//BLOCCO IF /ELSE      (stessa funzione del ?)
let daStampare= ""                                  //con il blocco if/else, se le condizioni sono rispettate (in questo caso entrambe true) stamperà la prima stringa
if (condizionA&& condizionB) {                                       
    daStampare =" entrambe sono true"
} else {
    daStampare= "non sono entrambre true"                        // else (oppure) stamperà la seconda   
        console.log (daStampare);
}
// SWITCH ()                                     // Lo switch funziona mettendo diversi casi ed in caso in cui la variabile coincida con uno dei casi viene stampato
                                                 

let = provaSwitch = "gatto" ;                    // variabile
switch (provaSwitch) {                           //costrutto switch (variabile su cui lavorare) {}
    case 1:                                      // definizione del caso
    console.log ("uno");
        break;                                   //(break) affinche non vi stampi in loop (in caso in cui non si inserisce si stampano tutti i casi dopo quello che coincide)
    case 2: 
    console.log ("due"); 
    break;
    case "gatto":                                // (dettaglio) il valore di case deve essere === alla variabile per coincidere
    console.log ("è proprio un gatto!");
    break;
    default:                                     // in caso in cui la variabile non coincida con nessuno dei casi viene stampato il default
    console.log ("errato")
        break;

// PICCOLA MAPPA

//numm = 2
//"numm++" equivale a num= num + 1      ( andrà avanti +1)  3,4,5,6,7   
//"numm"+=2 equivale a numm = num + 2    (andrà avanti a +2) 4,6,8,10




}
                                            // CICLI (LOOP)


   
  // LOOP FOR                                                  //(nel momento in cui definisci la variabile all'interno di un loop non si vede dall'esterno) 
  for (let numLoop = 0; numLoop < 4; numLoop++) {      // (for) serve a creare loop. in questa stringa sto definendo una variabile,
                                                       //sto chiedendo di fermare il conto fino ad un numero inferiore di 4,(numloop<4)
                                                       // e sto indicando di contare i numeri 1 ad 1 (numloop++)
    console.log(numLoop);
    
  }                                          
 // LOOP WHILE
let numWHile = 2;

while (numWHile < 8 ) {                                 // stesso costrutto per un loop solo che stampa mentre continua a renderizzare le altre regole quindi
    console.log (numWHile);                             // anche una condizione scritta dopo influisce in questo costrutto e quindi nella stampa (while is rendering is still changing)
    numWHile += 2;
}


//METODI DI FUNZIONI                                                                    // function ti permette di creare una funzione preimpostata 
// 1 METODO
let calcolo1 = FunzioneAddizione2Numeri (8,4);               // variabile con valori DETTAGLIO questa funzione può avere un valore prima di essere definita 

function FunzioneAddizione2Numeri(Numfunzione ,numerofunzione1) {   // dopo il "tag" function va messo il nome che si vuole utilizzare e tra() le variabili che vorrai utilizzare
   let tot= numerofunzione1 + Numfunzione;       //creare una variabile per il risultato tramite le variabili creare la funzione (meccanismo) che si vuole utilizzare in questo caso un'addizione
   return tot;                                    // "tag" return                                                   
   }                                                                        
console.log(calcolo1)                            // console.log della variabile


// 2 METODO

let FunzioneEspressione = function ( numEsp, numEsp1) {               
    let tot1= numEsp + numEsp1;
    return tot1
}
console.log (FunzioneEspressione ( 8, 9));

// CALLBACK                                (nonostante ci sia un timeout riusciamo a renderizzarle nell'ordine in cui vogliamo utilizzando la funzione call back)

// function PrimaFunzione(callback) {                     
// setTimeout(function() { 
 //   console.log(1);
//    callback();
 //}, 10);
//}
// function SecondaFunzione() {
 //   console.log(2);
    
// }
// PrimaFunzione(SecondaFunzione)                    // e quindi permette di chiamare due funzioni

// ARROW FUNCTION                                  abbreviazione di una funzione, di solito su usa per creare le funzioni anonime
//esempi
let funzioneArrow = (numero) => numero + 9;
console.log (funzioneArrow(9));


//SCOPES   (SPAZIO)

//GLOBAL SCOPE
let variabileScope = 7;  // questa variabile viene dichiarata nel global scope



console.log (variabileScope)
if (true) {
    //BLOCK SCOPE
    let variabileScope = 8;          //viene modificata nel block scope 
    console.log (variabileScope);
}


function funzioneScope() {
    //FUNCTION SCOPE                          // il valore dopo ritorna quello global
   return variabileScope;             
                                        //( se avessimo utilizzato var per dichiararla si sarebbe modificata in maniera "definitiva" nel codice )
}
console.log (funzioneScope())
// UNO DEI METODI UTILIZZATI PER MODIFICARE LE VARIABILI ALL'INTENO O DELLE FUNZIONI O DEI BLOCK SCOPE è IL METODO
function provathis (){
 this.variabileScope = 10;
 console.log (this.variabileScope);    // this che serve a modificare una variabile dentro un blocco ma con modifica temporanea
}
provathis();

x = 10;
y = 5;
x += y;
console.log (y)

function divisione(numerodivisione, numerodivisione2) {
 totaledivisione = numerodivisione / numerodivisione2;
 return (totaledivisione)
}
console.log (divisione (10,5));



let persona = ["Jessica","28 anni","palermo"]

let persona1 = {
    nome: "Jessica",
    anni: 28,
    città: "Palermo",
}

console.log (persona[1])
console.log (persona1.città)



let suca = 3
let forte = 4

let provasuca =  suca <forte? "suca" : "forte";
console.log(provasuca)

