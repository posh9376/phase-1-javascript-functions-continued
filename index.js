// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(work = 'go to the office') {
    return (`This Monday, I will ${work}.`)
}
function wrapAdjective(sign = '*') {
    const inner = function (word = 'special') {
        return(`You are ${sign}${word}${sign}!`)
    }
    return inner;
}
