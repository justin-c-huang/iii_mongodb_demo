var VAST = require('vast-xml');

var vast = new VAST();
var ad = vast.attachAd({ 
      id : 1
    , structure : 'inline'
    , sequence : 99
    , AdTitle : 'Common name of the ad'
    , AdSystem : { name: 'Test Ad Server', version : '1.0' }
  });

ad.attachImpression({
      id: "23"
    , url: "http://impression.com"
  });
ad.attachImpression({
      id: "sample-server"
    , url: "http://sample-impression.com"
  });


var creative = ad.attachCreative('Linear', {
    AdParameters : '<xml></xml>'
  , Duration : '00:00:30'
});

creative.attachMediaFile('http://domain.com/file.ext', {
    type: "video/mp4"
  , bitrate: "320"
  , minBitrate: "320"
  , maxBitrate: "320"
  , width: "640"
  , height: "360"
  , scalable: "true"
  , id: 'aa'
  , maintainAspectRatio: "true"
  , codec: ""
  , apiFramework: "VPAID"
});

creative.attachTrackingEvent('creativeView', 'http://creativeview.com');
creative.attachVideoClick('ClickThrough', 'http://click-through.com');

console.log(vast.xml({ pretty : true, indent : '      ', newline : '\n' }));