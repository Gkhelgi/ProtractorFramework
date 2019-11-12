let homepage2=function(num1,num2,index){
    element(by.model('first')).sendKeys(num1);
    element.all(by.options('value for (key, value) in operators')).then(function(items){
        items[index].click();
    });
    element(by.model('second')).sendKeys(num2);
    element(by.buttonText('Go!')).click();  
}
module.exports= new homepage2();

