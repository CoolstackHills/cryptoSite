var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking4c713fb9958f7d0969fc6a82e4fe3c7d438d626f2a6fb237";

fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok){
        response.json().then((json) => {
            let coinsData = json.data.coins;

            if(coinsData.length > 0) {
                var cryptoCoins = "";                
            }
            // for loop
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>";
                cryptoCoins += `<td> ${coin.symbol} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td> $${Math.round(coin.price)} </td>`;
                cryptoCoins += `<td> ${coin.tier} </td>`;
                cryptoCoins += `<td> ${coin.uuid} </td>`;
                cryptoCoins += `<td> ${Math.round((coin.btcPrice) * 10000000000) / 10000000000} </td>`; "</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    }
}).catch((error) => {
    console.log(error);
});