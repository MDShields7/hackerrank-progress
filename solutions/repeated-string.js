function repeatedString(s, n) {
    let nCopy = n;
    let countPerString = 0;
    let countLastString = 0;
    let stringMultiplier = Math.floor(n / s.length);
    let lastStringLength = nCopy % s.length;
    for (let i = 0; i < s.length; i++){
        if ( s[i] === 'a' ){
            countPerString += 1;
            if ( i < lastStringLength ) {
                countLastString += 1;
            }
        }
    }
    if ( lastStringLength === 0 ){
        return countPerString * stringMultiplier;
    } else {
        return (countPerString * stringMultiplier) + countLastString;
    }
    return count;
}