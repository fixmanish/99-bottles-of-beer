function beerBottles() {
    var beerCount = 99;

    while (beerCount > 0) {
        console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer.");
        console.log("Take one down and pass it around, " + (beerCount - 1) + " bottles of beer on the wall.");
        beerCount--;
        
        if (beerCount === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        }
        
    }
    
    if (beerCount === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}

beerBottles();
