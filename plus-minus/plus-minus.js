function plusMinus(arr) {
    const lengtArray = arr.length
    let positive = 0, negative = 0, zero = 0;
    arr.forEach(num => {
        if(num < 0){
            negative++
        }else if(num > 0){
            positive++
        }else if( num == 0){
            zero++;
        }
    })
    console.log(positive / lengtArray)
    console.log(negative / lengtArray)
    console.log(zero / lengtArray)
}

plusMinus([-4, 3, -9, 0, 4, 1]) 
// 0.500000
// 0.333333
// 0.166667