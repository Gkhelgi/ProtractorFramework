let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');


        homepage.enterfirstNumber('6');


        homepage.enetrSecondNumber('10');
        homepage.clickGo();


        // homepage.verifyResult('16');
        browser.sleep(4000);
    });
})