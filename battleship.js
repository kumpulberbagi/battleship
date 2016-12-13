// Your code here
function battleship() {
    console.log("AC : Aircraft carrier(5)");
    console.log("BS : Battleship(4)");
    console.log("CR : Cruiser(3)");
    console.log("DS : Destroyer(2)\n");
    var papan = [];
    var huruf = "ABCDEFGHIJ"
    huruf = huruf.split("")
    for (var i = 0; i < 11; i++) {
        var blok = [];
        for (var j = 0; j < 11; j++) {
            if (papan.length == 0) {
                if (j == 0) {
                    blok.push(" ")
                } else {
                    blok.push(j)
                }
            } else {
                if (j == 0) {
                    blok.push(huruf[i - 1])
                } else {
                    blok.push(" ")
                }
            }
        }
        papan.push(blok)
    }
    return papan;
}


console.log(battleship());
