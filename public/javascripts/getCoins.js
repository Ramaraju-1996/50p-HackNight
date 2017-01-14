var request = require('request');

var getCoins = function( callback) {
    console.log('I am here');

    var options = {
        url: 'https://api.coinsecure.in/v1/exchange/lastTrade'
    }
    console.log(options.url);
    request.get(options, function(err, response) {
        console.log(response.body.status+'Is the response body');
        if (err){
            return callback(err)
        }
        console.log(response.body+'Is the response body');
        var responseJson = JSON.parse(response.body);
        if(responseJson.status=='ERROR'){
            console.log("IN ERROR RESPONSE");
            callback(null,null);
        }
        console.log(response.body+'news is above thissssssssssssssss');
        var newsData = responseJson.message.avgRate;
	var s = {"speech":"Present Conversation Rate: 1Bitcoin = INR "+newsData,
	"displayText": "Present Conversation Rate: 1Bitcoin  = INR"+newsData,
        "source": "apiai-weather-webhook-sample"}
        callback(null, s)
    })
}

module.exports = getCoins