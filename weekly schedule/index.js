function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let firstDay = new Date("3/1/2020")