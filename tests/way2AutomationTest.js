let homepage=require('../pages/way2Automation_loginPage.js');

//const logger=require('./logger.js');
var xl = require('./XLReader.js');
describe('way2Automation login test cases',function(){

    var Test_Data=xl.read_from_xl('Sheet3','./XLData.xlsx');
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.manage().window().maximize();
    });
    Test_Data.forEach(function(data){

        it('TC!', function () {
            homepage.enterUsername(data.Username);
            homepage.enterPassword(data.Password);
            browser.sleep(3000);
            
            homepage.userdescription(data.UsernameDesc);
            homepage.clickLogin();
            browser.sleep(3000);
            
        });
    });       




})