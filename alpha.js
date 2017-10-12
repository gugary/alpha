(function(){
    $(".latex").change(function(){
        $.ajax({
            url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=ZGFR4Q6NTMDFZQ2A',
            dataType: 'json',
            cache: false,
            success: function(json){
		const obj = JSON.parse(json);
		alert(obj["Meta Data"]);
            },
            error: function(xhr, status, err){
                console.error(status, err.toString());
            }
        })
    });
})($);
