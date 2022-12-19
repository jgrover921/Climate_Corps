function sciNotes(num) {


    let myAns = new Intl.NumberFormat('en-US', { notation: "scientific" }).format(num);

    if (num > 1) {
        return myAns[0] + "." + myAns[2] + myAns[3] + " x  10^" + myAns[myAns.length - 1]
    }
    else if (myAns[2] == "-") {
        return myAns[0] + ".00 x 10^-" + myAns[myAns.length - 1]
    }
    else if (myAns[3] == "E") {
        return myAns[0] + "." + myAns[2] + "0 x 10^-" + myAns[myAns.length - 1]
    }

    else if (myAns[myAns.length - 2] != "-") {

        return myAns[0] + "." + myAns[2] + myAns[3] + " x  10^-" + myAns[myAns.length - 2] + myAns[myAns.length - 1]
    }

    return myAns[0] + "." + myAns[2] + myAns[3] + " x  10^-" + myAns[myAns.length - 1]

}
