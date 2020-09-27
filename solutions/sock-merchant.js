function sockMerchant(n, ar) {
    let pairs = 0;
while (ar.length > 0){
        let startSock = ar[0];
        let matchAr = ar.filter(sock => sock === startSock)
        ar = ar.filter(sock => sock !== startSock);
        let matchPairs = matchAr.length/ 2;
        let pairsMade = matchPairs;
        pairs += Math.floor(pairsMade);
    }
    return pairs;
}