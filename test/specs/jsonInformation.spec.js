const testData = require ('../testData/data.json');

describe('Json Dropdown Information: ', () => {

    it('Should iterate json', async () => { // Info from Json
        testData.forEach(function(element){
            console.log("Dropdown Text " + element['text']);
            console.log(parseInt(element['index']));
    });  
});
});