var trainNumber=1;
var totalTrains=12;
var operationalTrains=8

for (var trainNumber=1; trainNumber<=totalTrains; trainNumber++){
	if (trainNumber<=operationalTrains){
		console.log("Train Number" +trainNumber+ "is running");
	}else{
		console.log("Train Number #" +trainNumber+ "is not running");
	}
	
}