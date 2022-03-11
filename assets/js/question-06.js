function getAngkaTerbesarKedua(personName) {
    if (typeof personName === 'object') {
        let max = Math.max.apply(Math, personName)
        let max2 = 0;
        for (let i=0; i<=personName.length; i++) {
            if (personName[i] === max) {

            } else {
                if (personName[i] > max2) {
                    max2 = personName[i]
                }
            }
        }
        return max2
    } else if (personName === undefined) {
        return "Error: Bro where is the parameter?"
    } else {
        return "Error: Invalid data type"
    }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())