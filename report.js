class Main {
	loadCode(event, data){
		var callback = event.data.callback;
		var context = event.data.context;
		var filenameUrl = $(".codeFile").val();
		var ext = context.getFileExtension(filenameUrl);
		if(filenameUrl === ""){
			return;
		}
		$.ajax({
			url : filenameUrl,
			dataType: "text",
			type: "GET",
			"crossDomain": true,
			success : function (data) {
				$(".insertCode").text(data);
				$(".insertCode").addClass(ext);
				callback();
				$(".forms").remove();
			}
		});
		}

		fulfillSVGs(){
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

		bindEvents(callback){
			$(".submit").on("click", {
				callback: callback,
				context: this
				}, this.loadCode);
			$(".submit").on("click", this.fulfillSVGs);
		}

		getFileExtension(filename){
			return filename.split('.').pop();	
		}
}