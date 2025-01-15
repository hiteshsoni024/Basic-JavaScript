//for 
// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);
// }
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j <3; j++) {
//         console.log(j);
//     }
// }
// for (let i = 1; i < 10; i++) {
//     console.log(`Table of ${i}`)
//     for (let j = 1; j <= 10; j++) {
//        console.log(i+'*'+j+'='+i*j);
//     }
// }

// let myarray=["C programming","C++","C#","Javascript","Java","Python"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

for (let index = 0; index < 20; index++) {
    if(index==7){
        console.log("7 is detected !!");
        break;//break throw out of the condition loop
    }
    console.log(`Value of index is ${index}`)
}
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("5 is detected !!");
        continue;//continue ignores the condition one time only and continues where it ignores
    }
    console.log(`Value of index is ${index}`)
}
