this.Main = function(){
	
}
Main.prototype.loadCode =  function(event, data){
		var callback = event.data.callback;
		var url = $(".cppFile").val();
		$.ajax({
			url : url,
			dataType: "text",
			type: "GET",
			"crossDomain": true,
			success : function (data) {
				$(".insertCode").text(data);
				callback();
				$(".forms").remove();
			}
		});
}

Main.prototype.fulfillSVGs = function(){
	var files = $(".svgFiles").val().split(";");
	if(files.length === 0){
		return;
	}
	for(var i = 0; i < files.length; i++)
	{
		var j = i;
		$(".images").append("<img src='"+files[j]+"'/></br>");
	}
}

Main.prototype.bindEvents = function(callback){
	$(".submit").on("click", {callback: callback}, this.loadCode);
	$(".submit").on("click", this.fulfillSVGs);
}