function balanceStatements(list) {
    var result = '';
    var buy = 0;
    var sell = 0;
    var bad = 0;
    orders = String(list).split(",");
    for (var i = 0; i < orders.length; i++) {
        var valid = true;
        items = orders[i].trim().split(" ");
        //check quantity
        if (items.length != 4 || isNaN(items[1]) || String(items[1]).search(/\./i) > -1 || isNaN(items[2]) || String(items[2]).search(/\./i) === -1 ) {
            result += items.join(" ") + " ;";
            bad++;
        } else {
            var price = parseFloat(items[2]) || 0;
            var quty = parseInt(items[1]) || 0;
            if (items[3] === "B") {    
                buy += Math.round(price * quty);
            } else if (items[3] === "S") {
                sell += Math.round(price * quty);
            }
        }
    }
    console.log(list);
    return "Buy: " + buy + " Sell: " + sell + ((result !== "" && list !== "") ?  "; Badly formed "+bad+": " + result : "");
}

