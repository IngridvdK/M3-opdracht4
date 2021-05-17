
const age = 20;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 99;


if (age >= 18) {
    console.log("Kom gezellig binnen");
}
    else {
    console.log("Helaas, jij mag hier nog niet naar binnen");
    }


if (isFemale == true) {
    console.log("Alsjeblieft je kaartje voor de Ladiesnight");
}
    else {
    console.log("Helaas, deze kaarten zijn niet beschikbaar voor jou");
    }


if (driverStatus == "bob") {
    console.log("Je mag naar huis rijden, fijne avond nog");
}
    else {
    console.log("We bellen een taxi voor je zodat je veilig thuis komt, even geduld")
    }

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}

if (name === "Sarah" || name === "Bram") {
    console.log("Je krijgt een gratis biertje!");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega)bitterballen!");
}

    else if (totalAmount >= 50 && totalAmount < 100) {
        console.log("Je krijgt een gratis portie nachos!");
    }
        else if (totalAmount >= 100) {
            console.log("Je krijgt een gratis flesje champagne!");
        }
