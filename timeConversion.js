function timeConversion(time){
    let input = time.split(":");
    let hours = parseInt(input[0])
    let timeFrame = input[2].slice(2);
    const seconds = input[2].slice(0,2);s
    if(timeFrame === "PM" && hours !==12){
        hours += 12;

    }
    else if(hours === 12 && timeFrame === "AM"){
        hours = "00"
    }else if(hours < 10){
        hours = "0"+ hours.toString()
    }
    else{
        hours = hours.toString()
    }
   console.log([hours,input[1],seconds].join(":"));
}
const convertedTime = timeConversion("09:05:45AM")