//get date string
const getDateStr = (days, baseDate) => {
    const date = baseDate.addDays(days)
    day = (date.getDate() + '').length !== 2 ? '0' + date.getDate() : date.getDate()
    month = ((date.getMonth() + 1) + '').length !== 2 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    year = date.getFullYear()
    return `${year}-${month}-${day}`
}

//add days to date
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

//parsing input value
const inputData = process.argv[2].split(' ')
const inputObj = {}
inputData.forEach(data => inputObj[data.split(':')[0]] = parseInt(data.split(':')[1]))
console.log('Input: ', inputObj)

const initialDate = Object.keys(inputObj)[0]
const finalDate = Object.keys(inputObj)[1]
const initialVal = inputObj[initialDate]
const finalVal = inputObj[finalDate]

//get number of dates between provided dates
const timeDifference = new Date(finalDate).getTime() - new Date(initialDate).getTime()
const dateDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) - 1

//find common difference
const commonDiff = (finalVal - initialVal) / (dateDifference + 1)

//output object
const outputObj = {}
outputObj[initialDate] = initialVal
for (let i = 1; i <= dateDifference; i++) {
    const currDate = getDateStr(i, new Date(initialDate))
    outputObj[currDate] = initialVal + commonDiff * i
}
outputObj[finalDate] = finalVal
console.log('Output: ', outputObj)