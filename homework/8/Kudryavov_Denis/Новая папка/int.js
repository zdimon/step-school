var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "d264b94943mshacbfe5d33ea9d0bp17732ejsndd1b66e20316",
		"x-bingapis-sdk": "true"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});