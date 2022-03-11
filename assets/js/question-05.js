function getSplitName(personName) {
    if (typeof personName == 'string') {
        let explode = personName.split(" ")
        if (explode.length === 3) {
            return {firstName: explode[0], middleName: explode[1], lastName: explode[2]}
        } else if (explode.length === 2) {
            return {firstName: explode[0], middleName: null, lastName: explode[1]}
        } else if (explode.length === 1) {
            return {firstName: explode[0], middleName: null, lastName: null}
        } else {
            return "This function is only for 3 characters name"
        }
    } else {
        return "Error: Invalid data type"
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))