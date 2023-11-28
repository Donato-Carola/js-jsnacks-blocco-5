/*Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

const arrayUno = ['a','b','c'];
const arrayDue = [1,2,3];

const arrayTre = []

if(arrayDue.lenght !== arrayUno.length){
    alert('impossibile')
}else{
    const arrayTre = [];

    arrayDue.forEach((element,index)=>{
        arrayTre.push(arrayUno)
    })
}