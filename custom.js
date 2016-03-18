//load WebFont
WebFontConfig = {
    google: {
        families: ['Noto Sans'],
    },
    custom: {
        families: ['Noto Sans TC', 'Noto Sans SC'],
        urls: ['http://fonts.googleapis.com/earlyaccess/notosanstc.css',
               'http://fonts.googleapis.com/earlyaccess/notosanssc.css']
    },
    active : function() { 
        document.getElementsByTagName("body").className += "notosans"; 
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();