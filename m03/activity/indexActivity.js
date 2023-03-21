console.log("Hello, Welcome to De La Salle University");

function computeSupply(age, amountPerDay) {
    var intAmountPerDay = Math.round(amountPerDay);
    var maxAge = 99;
    var totalNeeded = (intAmountPerDay*365) * (maxAge-age);
    console.log(`You need ${totalNeeded} to last until the ripe age of ${maxAge}.`);
}

computeSupply(22, 2.5);
computeSupply(30, 2.4);
computeSupply(15, 5.678);