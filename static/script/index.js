let name
do{
  name = prompt("Inserisci il tuo nome: ")
}while(name===null  || name.trim() === "");

 
let voto1, voto2, voto3
do{
  voto1 = prompt("Inserisci il tuo voto di italiano: ")
}while(voto1===null || isNaN(voto1))

do{
  voto2 = prompt("Inserisci il tuo voto di matematica: ")
}while(voto2===null || isNaN(voto2))
  
do{
  voto3 = prompt("Inserisci il tuo voto di Informatica: ") 
}while(voto3===null || isNaN(voto3))
  
voto1 = parseInt(voto1)
voto2 = parseInt(voto2)
voto3 = parseInt(voto3)

console.log("Italiano = ", voto1, typeof voto1)
console.log("Matematica = ", voto2, typeof voto2)
console.log("Informatica = ", voto3, typeof voto3)

let Media = (voto1 + voto2 + voto3)/3
Media = parseFloat(Media)
console.log("La media dello studente è", Media, typeof Media)

if(Media<6){
  alert("Sei insufficiente!")
}else if(Media>=6 && Media<=7.9){
  console.log("Il rendimento è sufficiente.")
}else if(Media>=8){
  console.log("Il rendimento è eccellente.")
}
