# Keen-js meteor client test

## Problem solved! See https://github.com/keen/keen-js/issues/413

Instead of `keen-js` use:

* https://github.com/keen/keen-tracking.js
* https://github.com/keen/keen-analysis.js
* https://github.com/keen/keen-dataviz.js



## Start

* Install meteor framework: https://www.meteor.com/install
* Install dependencies with `meteor npm install`
* Edit keen-js key and project id in `client/main.js`
* Run with `npm start`
* Open http://localhost:3000
* Inspect javascript console (browser)

## Expected error

`Uncaught TypeError: Cannot read property 'join' of undefined`
