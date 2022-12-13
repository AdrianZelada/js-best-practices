const changeHandler = require('./changeHandler');

const result = changeHandler.convertToChange(31);
console.log(result)
if(result.toString() == ['p','q','q','q'].toString()){
    console.log("is equals");
} else {
    console.error("is not equals");
}
