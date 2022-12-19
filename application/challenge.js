function sciNote(num) {
    console.log(num);
    let newArr = [];
    let myNum = num.toString();
    let myIndex = myNum.indexOf(".");
    let parsedInt = parseFloat(myNum)

    console.log("myIndex", myIndex)

    if (myIndex > -1) {
        for (let i = 0; i < parsedInt.length; i++) {
            if (parsedInt[i] != ".") {
                newArr.push(parsedInt[i])
                
            } else {
                return "yes"
            }


        }
    } console.log(newArr)
}

sciNote(9.233423)




function sciNote2(num) {
num.toString()
num.split()
}