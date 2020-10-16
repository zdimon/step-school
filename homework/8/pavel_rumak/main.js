

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "553dcb48e2mshb75aabeecc6dcc5p14f9d6jsnfe2fd141b2d1"
	}
};


$.ajax(settings).done(function (response) {
	console.log(response);
});








