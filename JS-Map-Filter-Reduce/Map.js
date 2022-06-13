const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const nums = [1, 2];

function mapComThis(arr, thisArg) {
    return arr.map(function(item) { 
       return item * this.value;
    }, thisArg);
}

// ARROW FUNCTION NÃO ACEITA THIS

console.log("This -> maçã ", mapComThis(nums, maca));

console.log("This -> laranja ", mapComThis(nums, laranja));

const nums2 = [2, 4, 6, 8, 10];

// function mapSemThis(arr) {
//     return arr.map(function(item) { 
//        return item * 2;
//     });
// }

function mapSemThis(arr) {
    return arr.map((item) => item * 2);
}

console.log("Map retornando cada item do array * 2: " , "Array original ->" ,nums2 , "Array mapeado ->" ,mapSemThis(nums2));