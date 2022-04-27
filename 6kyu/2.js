// You need to return a string that looks like a diamond shape when printed on the
// screen, using asterisk (*) characters. Trailing spaces should be removed, and
// every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not
// possible to print a diamond of even or negative size.

function diamond(size){
    let p = ""
    if (size > 1 && size % 2 !== 0){
        let d = 1
        let b = ((size+1)/2)-1
        for(let i=0;i<((size+1)/2);i++){

            if (b !== 0){
                for(let j=0;j<b;j++){
                    p += " "
                }
                b -= 1
                for(let m=0;m<d;m++){
                    p += "*"
                }
                d += 2

                p += "\n"
            }
            else{
                for(let n=0;n<d;n++){
                    p += "*"
                }
                p += "\n"
            }

        }
        b += 1
        d -= 2
        for (let i=0;i<((size+1)/2-1);i++){
            for(let j=0;j<b;j++){
                p += " "
            }
            b += 1
            for(let m=0;m<d;m++){
                p += "*"
            }
            d -= 2
            p += "\n"
        }
        return p
    }else if (size === 1){
        return "*\n"
    }
    return null
}

console.log(diamond(5));