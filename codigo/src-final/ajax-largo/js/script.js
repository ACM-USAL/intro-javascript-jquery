var ajax_call = function(){
	$.ajax({
		type:"GET",
		url:'http://acm.martinarroyo.net/meaningoflife/',
		dataType:"json",
		beforeSend: function(){
			$("#content").html('<img src="http://gis.rhein-sieg-kreis.de/mapbender/img/sandclock.gif" width="100px"/>');
			$("#boton").prop('disabled', true);
		},
		success:function(response){
			$('#content').html('<p>'+response.meaningoflife+'</p>');
		},
		error : function(rs, e) {
			console.log("Error");
		}, complete: function(){
			//$("#boton").prop("disabled", true);
			$("#boton").prop('disabled', false);
		}
	});
};


