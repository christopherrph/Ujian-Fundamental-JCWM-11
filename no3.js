function cekkoin(koin){
    var total = 0
    var k25 = 0
    var k10 = 0
    var k5 = 0
    var k1 = 0
    while(koin>0){
    if(koin-25>=0){
        koin=koin-25
        total++;
        k25++;
    }else if(koin-10>=0){
        koin=koin-10
        total++;  
        k10++;
    }else if(koin-5>=0){
        koin=koin-5
        total++;  
        k5++;
    }else if(koin-1>=0){
        koin=koin-1
        total++;  
        k1++
    }
}
    return `Dibutuhkan ${total} Buah Koin. Yaitu ${k25} Buah Koin 25 Sen, ${k10} Buah Koin 10 Sen, ${k5} Buah Koin 5 Sen, ${k1} Buah Koin 1 Sen.`
}
console.log(cekkoin(31))