let scenarios = [];
let refhost = '';
let testhost = '';
let args = require('minimist')(process.argv.slice(2));

(args.testhost) ? testhost = args.testhost : testhost = 'http://dev.env';
(args.refhost) ? refhost = args.refhost : refhost = 'http://live.env';

const paths = [
'/',
// '/a',
// '/list',
// '/of',
// '/paths',
// '/to'
// '/test'
];

for (let i = 0; i < paths.length; i++) {
  scenarios.push({
    "label": paths[i],
    "referenceUrl": refhost+paths[i],
    "url": testhost+paths[i],
    "hideSelectors": [],
    "removeSelectors": [],
    "selectors": [],
    "readyEvent": null,
    "delay": 200,
    "misMatchThreshold" : 0.52,
    "onBeforeScript": "onBefore.js",
    "onReadyScript": "onReady.js"
  });
}

module.exports = {
  "id": "prod_backstop",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 2000
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 2000
    },
    {
      "label": "desktop",
      "width": 1280,
      "height": 2000
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
