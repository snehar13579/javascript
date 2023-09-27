//kis tarah se data ko store kiya jata hai uske basis pe 2 type of dataypes hote hain
// 1.)primitive datatype-7 types
// 7 types:String,numbers,boolean,nuull,undefined,Symbol,BigInt
// dynamic ype:-as while declaring variable no need to specy data type

const id=Symbol('123')
const anotherId=Symbol('123')
// symbol change the value if same input is gien to 2 diferent variables
console.log(id==anotherId)
// 2.)Reference(non primitive) datatype
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof heros);

//on finding typeof :type of all non-premitive datatypes are object