let velly = 0;
let seaLevel = 0;

for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
        seaLevel++
    }
    if (path[i] === 'D') {
        if (seaLevel === 0) {
            velly++
        }
        seaLevel--
    }
}