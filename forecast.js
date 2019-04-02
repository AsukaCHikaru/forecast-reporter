'use strict';

const mocha = require('mocha');

function Forecast(runner) {
   mocha.reporters.Base.call(this, runner);

   var tests = {
       total: runner.total,
       passed: 0,
       failed: 0,
   };

   runner.on('start', () => {
       console.log(`TEST START (${tests.total} test cases)`);
   });

    runner.on('suite', (suite) => {
        console.log(suite.title);
    });

    runner.on('test', (test) => {
        console.log(test.title);
    });

    runner.on('pass', (test) => {
        tests.passed++;
        console.log(`> Pass (${test.duration/1000}s)`);
    });

    runner.on('fail', (test) => {
        tests.failed++;
        console.log(`> Fail (${test.duration/1000}s)`);
    });

    runner.on('end', () => {
        let passRate = (tests.passed / tests.total)*100;
        console.log('TEST ENDED');
        console.log(`${tests.passed}/${tests.total} passed (${passRate}% pass rate)`);
    });
}

module.exports = Forecast;