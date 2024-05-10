const topic= [ '10101', '11100', '11010', '00101' ]
let maxTopics = 0;
let maxTeams = 0;


for(let i = 0; i<topic.length ; i++){
    for(let j = i + 1 ; j<topic.length ; j++ ){
        let knownTopics = 0
        for(let f = 0 ; f<topic[i].length ; f++){
            if(topic[i][f] === '1' | topic[j][f]){
                knownTopics++
            }
        }
        if (knownTopics > maxTopics) {
            maxTopics = knownTopics;
            maxTeams = 1;
        } else if (knownTopics == maxTopics) {
            maxTeams++
        }
        
        
    }
}
console.log(maxTopics, maxTeams);
