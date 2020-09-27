function hourglassSum(arr) {
    let resultArr = [];
    let copyArr = [];
    let finalArr = [];
    let highest;

    function populateArrays(){
      var c1 = arr[0].length - 1;
      var c2 = c1;
      var cOrig = ( c1 );
      var cCount = cOrig;
      let newArr2 = [];
      while (c1 >= 0){
        newArr2.push(0);
        c1 -= 1;
      }
      while (cCount >= 0){
          copyArr.push(newArr2.slice())
          c2 -= 1;
        cCount -= 1;
      }
    }

    function makecopyArr() {
        for ( let i = 0; i < arr.length; i++){
            // Find column 'i condition'
            let iCond1 = i === 0;
            let iCond2 = i > 0 && i < arr.length -1;
            let iCond3 = i === arr.length - 1;
            for (let j = 0; j < arr[i].length; j++){
                let val = arr[i][j];
                let jCond1 = j === 0;
                let jCond2 = j > 0 && j < arr[i].length -1;
                let jCond3 = j === arr[i].length - 1;
                if (iCond2 && jCond2){
                  copyArr[i][j] = copyArr[i][j] + arr[ i-1 ][ j-1 ];
                  copyArr[i][j] = copyArr[i][j] + arr[ i-1 ][ j+0 ];
                  copyArr[i][j] = copyArr[i][j] + arr[ i-1 ][ j+1 ];

                  copyArr[i][j] = copyArr[i][j] + arr[ i+0 ][ j+0 ];

                  copyArr[i][j] = copyArr[i][j] + arr[ i+1 ][ j-1 ];
                  copyArr[i][j] = copyArr[i][j] + arr[ i+1 ][ j+0 ];
                  copyArr[i][j] = copyArr[i][j] + arr[ i+1 ][ j+1 ];

                }
            }
        }
    };

    function calcFinalArr() {
        copyArr.filter( function ( arrLevel, arrLevelIndex ){
          console.log('arrLevel.length',arrLevel.length)
            if( arrLevelIndex !== 0 && arrLevelIndex !== arrLevel.length -1 ){
              arrLevel.filter( function ( num, index ){
                if ( index !== 0 && index !== arrLevel.length -1 && highest === undefined){
                    highest = num;
                } else if ( index !== 0 && index !== arrLevel.length -1 && num > highest){
                    highest = num;
                } 
              })
            }
        })
    }
    
    populateArrays();
    makecopyArr();
    calcFinalArr();
    return highest;
}