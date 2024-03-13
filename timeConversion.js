const s = '06:40:03AM'

const timeArray = s.split(":");
let hours = parseInt(timeArray[0]);
const minute = timeArray[1]
const second = timeArray[2].slice(0,2)
const timePeriod = timeArray[2].slice(2,4);
if(timePeriod === 'AM' && hours < 10){
    hours = '0' + hours.toString()
}
else if(timePeriod === 'PM' && hours !== 12){
    hours += 12 
}
else if(timePeriod === 'AM' && hours === 12){
    hours = "00"
}

let time = [hours , minute , second].join(":")
console.log(time);
