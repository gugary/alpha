(function(){
    // function getquotes(){
    // 	var req=http.request({
    //         host: "finance.google.com",
    //         path: "/finance/info?client=ig&q=ADP,AAPL,AMZN,BRK.A,GOOGL,GS,IBM",
    // 	},function(res){
    //         if(res.statusCode!==200){
    // 		log(res.statusCode.toString());
    //         }
    //         res.on('error', function(e){
    // 		log(e.message);
    //         });
    //         var data = '';
    //         res.on('data', function(d){
    // 		data += d;
    //         });
    //         res.on('end', function(){
    //         if(data.length>3){
    //             try{
    //                 var o=JSON.parse(data.substring(3));
    //                 cache=data.substring(3);
    //             }catch(e){
    //             }
    //         }
    //         });
    // 	});
    // 	req.on('error',function(e){
    //         console.log(`problem with request: ${e.message}`);
    // 	});
    // 	req.end();
    // }

    $(".latex").change(function(){
        $.ajax({
            url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=ZGFR4Q6NTMDFZQ2A',
            dataType: 'json',
	    headers: {'Access-Control-Allow-Origin':'*'},
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
