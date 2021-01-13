	let total_cases = 0;
			
            $.getJSON("RoCases.json", function(json) {
				var mainContainer = document.getElementById("demo");
				var div = document.createElement("div");
                var count = Object.keys(json).length;
                total_cases = json[count-1].total_cases
				div.innerHTML = total_cases
				mainContainer.appendChild(div);
                console.log(total_cases);
        });