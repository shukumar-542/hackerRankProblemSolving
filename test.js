function timeConversion(time){
    console.log(time);
    const input = time.split(":");
    let hours = parseInt(input[0]);
    const timeFrame = input[2].slice(2,4)
    // console.log(seconds );
    if(timeFrame === "PM" && hours !== 12){
        hours += 12;
    }
    else if(timeFrame === "AM" && hours=== 12){
        hours = "00"
    }
    else if(hours < 10){
        hours = "0"+ hours.toString();
    }else{
        hours = hours.toString()
    }
    console.log([hours,input[1], input[2].slice(0,2)].join(":"));
}
timeConversion('01:05:12PM')