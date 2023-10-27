// exports.sum=(a,b)=>{//This is a common js module method
//     return a+b;
// }
// exports.diff=(a,b)=>{
//     return a-b;
// }
//Now ES6 module method
const sum=(a,b)=>{
    return a+b;
}
const diff=(a,b)=>{
    return a-b;
}
export {sum,diff}
