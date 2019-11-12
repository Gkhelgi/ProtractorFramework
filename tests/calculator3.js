let homepage2 = require('../pages/homepage2');
describe('demo calculator tests', function () {

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });


    it('addition test', function () {

        homepage2(3,5,0);
        browser.sleep(3000);
    });

})
