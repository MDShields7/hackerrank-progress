function catAndMouse(x, y, z) {
    let catADist = Math.abs(x-z);
    let catBDist = Math.abs(y-z);
    if (catADist < catBDist){
        return 'Cat A'
    } else if (catADist === catBDist){
        return 'Mouse C'
    } else {
        return 'Cat B'
    }
}