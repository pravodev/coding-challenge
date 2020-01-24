function staircase(n) {
    for(let index=0; index<n; index++){
        console.log('#'.padEnd(index+1, '#').padStart(n))
    }
}

staircase(6)
//      #
//     ##
//    ###
//   ####
//  #####
// ######