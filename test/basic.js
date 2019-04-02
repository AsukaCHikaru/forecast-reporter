// A basic test case for forecast.js
const assert = require('assert');

describe('Basic', () => {
    it('Async test spending 3~4s', (done) => {        
        setTimeout(() => {
            assert.equal(1 + 1, 2);
            done();
        }, 3000+Math.random()*1000);
    });
    it('Async test spending 10~15s', (done) => {        
        setTimeout(() => {
            assert.equal(1 + 1, 2);
            done();
        }, 10000+Math.random()*5000);
    }); 
});