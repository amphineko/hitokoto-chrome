/*
	
	Hitokoto for Chrome
	
	Copyright (c) 2014 Naoki Rinmous, Published under WTFPL
	
*/

$.ajax('https://api.hitokoto.us:214/rand').done(function(data, textStatus, jqXHR) {
	var cat = {
		a: '動畫', b: '漫畫', c: '遊戲', d: '小說', e: '原創', f: '來自網路', g: '其他/不明'
	};
	$('head').append('<style>div#hitokoto-popup:hover::after{content:\'' + cat[data.cat] + (data.source ? (' ' + data.source) : '') + ' by ' + data.author + '\'}</div>');
	$('body').append('<div id="hitokoto-popup" onclick="document.getElementById(\'hitokoto-popup\').remove()"><a href="http://hitokoto.us/view/' + data.id + '" target="_blank">' + data.hitokoto + '</a></div>');
});

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		setTimeout(function () {
			$('#hitokoto-popup').remove();
		}, 4000);
	}
};

document.onreadystatechange();
