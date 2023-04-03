function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let userNames = ['James', 'Jane', 'Ryan', 'Rebecca']

let user = {
    name: userNames[roll(0, userNames.length)],
    age: roll(12, 65),
    height: roll(5.1, 6.1, 1).toFixed(1)
}
console.log(user)