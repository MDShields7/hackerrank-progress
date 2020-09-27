function pageCount(n, p) {
    let targetOdd = p % 2 === 0 ? p + 1: p;
    let backOdd = n % 2 === 0 ? n + 1 : n;
    let frontAmt = (targetOdd - 1) / 2;
    let backAmt = (backOdd - targetOdd) / 2;
    let result = frontAmt <= backAmt ? frontAmt : backAmt;
    return result;
}