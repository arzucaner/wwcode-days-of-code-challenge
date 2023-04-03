function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let firstDay = new Date("3/1/2020")

function getNextDay(day) {
    let nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 1)
    return nextDay
}

function generateTasks() {
    return [...Array(roll(2,5))].map((_, i) => {
        return {
            index: i,
            name: `Task ${roll(1, 60)}`,
            complete: roll(0,2) ? true : false
        }
    })
}

function buildWeek(day) {
    return [...Array(7)].map((_,i) => {
        let weekday = {
            index: i,
            date: day,
            tasks: generateTasks()
        }
        day = getNextDay(day)
        return weekday
    })

}

console.log(buildWeek(firstDay))

let week = buildWeek(firstDay)