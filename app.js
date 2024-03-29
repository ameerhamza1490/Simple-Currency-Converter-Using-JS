var currency = prompt("Do you Have $ or PKR?")
var pkrCurrency = currency.toLowerCase();

if (currency === "$") {
    var amount = prompt("How many Dollars do you have?")
    var convertToPkr = amount * 277.90;
    alert("You have " + convertToPkr + " rupees in your account.");
}

else if (pkrCurrency === "pkr") {
    var amount = prompt("How many Rupees do you have?")
    var convertToDollar = (amount / 277.90).toFixed(2);
    alert("You have " + convertToDollar + "$ in your account.");
}

else{
    alert("Enter the correct currency.");
}