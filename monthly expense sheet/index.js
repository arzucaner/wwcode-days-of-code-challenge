function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)    
}

let startDay = new Date("3/15/2023")

function getNextDay(day) {
    let nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 1)
    return nextDay
}

function buildMonth(day) {
    let daysInMonth = getDaysInMonth(day.getMonth() + 1, day.getFull())
    let iterableDay = new Date(day)
    iterableDay.setDate(1)
    let month = [...Array(daysInMonth)].map((_, i) => {
        let monthDay = {
            index: i,
            date: iterableDay,
            expenses: []
        }
        iterableDay = getNextDay(iterableDay)
        return monthDay
    })
    return month
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}

let month = buildMonth(startDay)

function displayMonth(month) {
    let monthHtml = month.reduce(function(accumulator, day) {
        return accumulator + `<div class="day">${day.date.getDate()}</div>`
    }, '')
    document.getElementById('MonthlyExpenses').innerHTML = monthHtml
}
displayMonth(month)