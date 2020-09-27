function rotLeft(a, d) {
    let frontStr = a.slice(0, d)
    let backStr = a.slice(d)
    let newStr = backStr.concat(frontStr);
    return newStr;
}