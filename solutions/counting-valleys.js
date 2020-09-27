function countingValleys(n, s) {
    let level = 0;
    let valley = false;
    let count = 0;
    for ( let i = 0; i < n; i++){
        let path = s.slice(i, i+1);
        if( path === 'D'){
            level -= 1;
        } else {
            level +=1;
        }
        if (level < 0 && valley === false ){
            count += 1;
            valley = true;
        } else if ( level >= 0){
            valley = false;
        }
    }
    return count;
}