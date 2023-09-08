const date = new Date()

let currentUTCTime = date.getTime(),
    currentDayOfTheWeek = date.getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.querySelector('.time').innerHTML = currentUTCTime
document.querySelector('.day').innerHTML = days[currentDayOfTheWeek]
