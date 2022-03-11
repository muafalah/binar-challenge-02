function isValidPassword(email) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    if (typeof email === 'string') {
        if (regex.test(email)) {
            return true
        } else {
            return false
        }
    } else if (email === undefined) {
        return "Error: Bro where is the parameter?"
    } else {
        return "Error: Invalid data type"
    }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())