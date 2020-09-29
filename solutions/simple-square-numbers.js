function solve(n){
    for ( let i = 1; i <= n/2; i++ ){
      let boolResult = Number.isInteger(Math.sqrt(i**2 + n));
      if( boolResult ){
        return i**2;
      }
    }
    return -1;
}