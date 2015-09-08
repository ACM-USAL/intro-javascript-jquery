var ajax_call = function(){
	$.ajax({
		type:"GET",
		//url:'http://martinarroyo.net:8000/getdata/',
		url:'http://contador.martinarroyo.net/getdata/',
		dataType:"json",
		success:function(response){
			console.log(response.number);
			$('#feedback').text(response.number);
			$('#thermometer .middle').height(3 * response.number);
		},
		error : function(rs, e) {
			console.log("Error");
		}
	});
};

ajax_call();
setInterval(ajax_call, 1000);
