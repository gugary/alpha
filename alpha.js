(function(){
    $(".latex").change(function(){
        $.ajax({
            url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=ZGFR4Q6NTMDFZQ2A',
            dataType: 'json',
            cache: false,
            success: function(obj){
		const meta=obj["Meta Data"];
		const last=meta["3. Last Refreshed"];
		const onem = obj["Time Series (1min)"];
		const price= onem[last];
		alert(price["4. close"]);
            },
            error: function(xhr, status, err){
                console.error(status, err.toString());
            }
        })
    });
})($);
