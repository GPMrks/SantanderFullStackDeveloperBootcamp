function arrayValidation(arr, num) {
    try {
        if (!arr || !num) throw new ReferenceError("Params not received!");
    
        if (typeof arr !== "object") throw new TypeError("Array must be an object!");

        if (typeof num !== "number") throw new TypeError("Num must be a number!")

        if (arr.length !== num) throw new RangeError("Invalid size!")

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("This is a Reference Error!");
            console.log(error.message);
        }
        else if (error instanceof TypeError) {
            console.log("This is a Type Error!");
            console.log(error.message);
        }
        else if (error instanceof RangeError) {
            console.log("This is a Range Error!");
            console.log(error.message);
        } else {
            console.log("Error not expected: " + error);
        }
    }
}

const arr = [
    {
        name: "Carlos",
        age: 23,
    },
    {
        name: "Maria",
        age: 45,
    }
];

console.log(arrayValidation(arr, 2));