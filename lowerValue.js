
function lowerValue(arrProduct, index){
    let firstPosition = index;

    for(let i = index+1; i < arrProduct.length; i++){
        if(arrProduct[i].Price < arrProduct[firstPosition].Price){
            console.log(firstPosition);
            firstPosition = i;
        }
    }     
    return firstPosition;
}

module.exports = lowerValue;


