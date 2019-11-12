describe('demo calculator tests', function () {

    it('addition test', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //console.log(webdriver.WebDriver.prototype.getCurrentUrl);

        element(by.model('first')).sendKeys('2');

        element.all(by.options('value for (key, value) in operators')).then(function (items) {

            items[0].click();
            expect(items.length).toBe(5);
            expect(items[4].getText()).toBe('-');
        });
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        // element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(5000);

    });

    it('division test', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('10');
        element.all(by.options('value for (key, value) in operators')).then(function (items) {
            items[1].click();

        });
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();
        //console.log(element(by.binding('latest')).getText());
        browser.sleep(4000);

    });
    it('modulo test',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('15');
        element.all(by.options('value for (key, value) in operators')).then(function(items){
            items[2].click();

        });
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();        
        browser.sleep(4000);

    });
    it('multiplication test',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('10');
        element.all(by.options('value for (key, value) in operators')).then(function(items){
            items[3].click();

        });
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();        
        browser.sleep(4000);
    });
    it('subtraction test',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('10');
        element.all(by.options('value for (key, value) in operators')).then(function(items){
            items[4].click();

        });
        element(by.model('second')).sendKeys('7');
        element(by.buttonText('Go!')).click();  
        expect(element(by.binding('latest')).getText()).toBe('3');
        console.log(element(by.css('body > div > div > form > h2')).getText);     
        browser.sleep(4000);
    });


})