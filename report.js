class Main {
	loadCode(event, data) {
		const callback = event.data.callback;
		const context = event.data.context;
		const filenameUrl = $(".codeFile").val();
		const ext = context.getFileExtension(filenameUrl);
		if (filenameUrl === "") {
			return;
		}
		$.ajax({
			"url" : filenameUrl,
			"dataType": "text",
			"type": "GET",
			"crossDomain": true,
			"success" : function (data) {
				$(".insertCode").text(data);
				$(".insertCode").addClass(ext);
				callback();
				$(".forms").remove();
			}
		});
	}

	fulfillSVGs() {
		const files = $(".svgFiles").val().split(";");
		if (files.length === 0) {
			return;
		}
		for (let i = 0; i < files.length; i++)
		{
			const j = i;
			$(".images").append("<img src='" + files[j] + "'/></br>");
		}
	}

	bindEvents(callback) {
		$(".submit").on("click", {
			"callback": callback,
			"context": this
		}, this.loadCode);
		$(".submit").on("click", this.fulfillSVGs);
	}

	getFileExtension(filename) {
		return filename.split(".").pop();
	}
}