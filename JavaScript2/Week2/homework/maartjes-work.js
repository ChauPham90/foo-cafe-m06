'use strict';

const monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180,
    },
    {
        name: 'Some web development',
        duration: 120,
    },
    {
        name: 'Fix homework for class10',
        duration: 20,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
];

const tuesday = [{
        name: 'Keep writing summary',
        duration: 240,
    },
    {
        name: 'Some more web development',
        duration: 180,
    },
    {
        name: 'Staring out the window',
        duration: 10,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
    {
        name: 'Look at application assignments new students',
        duration: 40,
    },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
    const earningList = tasks.filter((tasksObject) => {
        return tasksObject.duration >= 120.0;
    });
    const billing = earningList.map((eachTasks) => {
        return eachTasks.duration * hourlyRate / 60
    });
    let total = billing.reduce((a, b) => a + b, 0);
    return total;
}
let earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
// let roundedEuCent = parseFloat(earnings);
// earnings = Math.round(roundedEuCent * 1000) / 1000;
earnings = earnings.toFixed(2);
console.log(earnings)
console.log(`Maartje has earned ${earnings} €`);

module.exports = {
    maartjesTasks,
    maartjesHourlyRate,
    computeEarnings,
};