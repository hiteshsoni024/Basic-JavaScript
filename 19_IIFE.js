//Immediately invoke fuction expression (IIFE)
//They are typically used to create a local scope for variables to prevent them from polluting the global scope.
( function chai(){//named IIFE
    console.log("Database is Connected");
} )();

//or

( (name) => {//unnamed IIFE
    console.log(`DataBase connected ! ${name}`);
} )("Hitesh");//parameter is passes through name