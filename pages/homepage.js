let homepage=function(){
    let firstNumber_input=element(by.model('first'));
    let secondNumber_input=element(by.model('second'));
    let go_button=element(by.css('[ng-click="doAddition()"]'));
   // let operatorOptions=element.all(by.options('value for(key,value) in operators'));
   // let operatorList=element(by.model('operator')).all(by.tagName('option'));
    let go=element(by.buttonText('Go!'));
    


    this.get=function(url){
        browser.get(url);
    }
    
    this.enterfirstNumber=function(firstNo){
        firstNumber_input.sendKeys(firstNo);

    }
    this.enetrSecondNumber=function(secondNo){
        secondNumber_input.sendKeys(secondNo);

    }
    this.clickGo=function(){
        go_button.click();
    }
   
    

}
module.exports= new homepage();