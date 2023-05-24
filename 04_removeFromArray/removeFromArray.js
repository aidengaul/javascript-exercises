const removeFromArray = function(arr, ...args) {
    for (const target of args) {
        const index = arr.indexOf(target);

        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
