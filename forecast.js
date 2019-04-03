'use strict';

const mocha = require('mocha');

function Forecast(runner) {
   mocha.reporters.Base.call(this, runner);

   var tests = {
       total: runner.total,
       passed: 0,
       failed: 0,
   };
   var indents = 0;
   function indent() {
       return Array(indents).join('  ');
   }

   runner.on('start', () => {
       console.log(`TEST START (${tests.total} test cases)`);
   });

    runner.on('suite', (suite) => {        
        console.log(indent() + suite.title);
        indents++;
    });
    runner.on('suite end', () => {
        indents--;
    });

    runner.on('test', (test) => {
        console.log(indent() + test.title);
    });

    runner.on('pass', (test) => {
        tests.passed++;
        console.log(indent() + `> Pass (${test.duration/1000}s)\n`);           
    });

    runner.on('fail', (test) => {
        tests.failed++;
        console.log(indent() + `> Fail (${test.duration/1000}s)\n`);
    });

    runner.on('end', () => {
        let passRate = (tests.passed / tests.total)*100;
        console.log('TEST ENDED');
        console.log(`${tests.passed}/${tests.total} passed (${passRate}% pass rate)\n`);
    });
}

module.exports = Forecast;