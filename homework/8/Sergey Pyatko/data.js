
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "88d3773216msh36cbe5492f491bep1b6cd9jsn7c9605af08f9"
	}
}


$.ajax(settings).done(function (response) {
    console.log(response);
});
