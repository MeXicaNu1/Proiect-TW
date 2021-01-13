window.onload = function () {

var options = {
	animationEnabled: true,  
	title:{
		text: "Covid Cases"
	},
	axisX: {
		valueFormatString: "DD MMM YYYY"
	},
	axisY: {
		title: "Total Cases",
	},
	data: [{
		yValueFormatString: "#",
		xValueFormatString: "MMMM",
		type: "spline",
		dataPoints: [
			{ x: new Date(2020, 0, 1), y: 0 },
			{ x: new Date(2020, 1, 1), y: 0 },
			{ x: new Date(2020, 2, 1), y: 3 },
			{ x: new Date(2020, 3, 1), y: 2460 },
			{ x: new Date(2020, 4, 1), y: 12567 },
			{ x: new Date(2020, 5, 1), y: 19398 },
			{ x: new Date(2020, 6, 1), y: 27296 },
			{ x: new Date(2020, 7, 1), y: 52111 },
			{ x: new Date(2020, 8, 1), y: 88593 },
			{ x: new Date(2020, 9, 1), y: 129658 },
			{ x: new Date(2020, 10, 1), y: 246663 },
			{ x: new Date(2020, 11, 31), y: 632263 }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}