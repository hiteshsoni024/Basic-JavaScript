const marvelHeros=["ironman","hulk","thor"];
const DCheros= ["superman","flash","batman"];
// marvelHeros.push(DCheros);//push pushes entire array into array
// console.log(marvelHeros);
// console.log(DCheros);//array takes entire DCheros as a element in marvelHeros 
const allHeros = marvelHeros.concat(DCheros);
console.log(allHeros);//concats array

const all_Heros_new = [...marvelHeros,...DCheros];
console.log(all_Heros_new);

const anotherArray= [1,2,4,3,[32,34,53],6,8,7,[2,4,5,[3,5,6,7]]];
console.log(anotherArray.flat(Infinity));//flats array in one array

console.log(Array.isArray("hitesh"));//search hitesh in array
console.log(Array.from("HITESH SONI"));//creates an array of string elements