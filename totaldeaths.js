let total_deaths = 0;
			
            $.getJSON("RoCases.json", function(json) {
				var mainContainer2 = document.getElementById("demo2");
				var div2 = document.createElement("div");
                var count2 = Object.keys(json).length;
                total_deaths = json[count2-1].total_deaths
				div2.innerHTML = total_deaths
				mainContainer2.appendChild(div2);
                console.log(total_deaths);
        });