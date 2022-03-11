function checkEmail(email) {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    let regexHuruf = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)$/
    if (typeof email === 'string') {
        if (regex.test(email)) {
            return "VALID"
        } else if (regexHuruf.test(email)) {
            return "INVALID"
        } else {
            return "Error: This is not email"
        }
    } else if (email === undefined) {
        return "Error: Bro where is the parameter?"
    } else {
        return "Error: Invalid data type"
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail(3322))
console.log(checkEmail())