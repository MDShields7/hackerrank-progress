function jumpingOnClouds(c) {
    let count = 0;
    let length = c.length;
    for (let i = 0; i < length; i++){
        if (c[i+2] === 0){
            count += 1;
            i+=1;
        } else if (c[i+1] === 0){
            count += 1;
        }
    }
    return count;
}