function miniMaxSum(arr) {
    let newArr = []
    arr.map((num, index) => {
        newArr.push(arr.filter((a,pos) => index != pos).reduce((a,b) => a+b))
    })
    
    const max = Math.max.apply(Math, newArr)
    const min = Math.min.apply(Math, newArr)
    console.log(min, max)
}

miniMaxSum([1,2,3,4,5])
// 10, 14
miniMaxSum([7,69,2,221,8974])
// 299 9271
miniMaxSum([5,5,5,5,5])
