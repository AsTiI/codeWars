// Kata Task
// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let a = [0,0,0]
    console.log(a)
    for(let i=1; i<humanYears+1; i++){
        for(let j=0; j<3; j++){
            if(i==1)
                switch(j){
                    case 0: a[j]++;break;
                    case 1: a[j]+=15;break;
                    case 2: a[j]+=15;break;
                }
            if(i==2)
                switch(j){
                    case 0: a[j]++;break;
                    case 1: a[j]+=9;break;
                    case 2: a[j]+=9;break;
                }
            if(i>2)
                switch(j){
                    case 0: a[j]++;break;
                    case 1: a[j]+=4;break;
                    case 2: a[j]+=5;break;
                }
        }
    }
    console.log(a)
    return a;
}
