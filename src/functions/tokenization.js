const stemmer = require('stemmer');
const sw = require('stopword');

const tokenization =  (text) => {
    let split = text.split(/[\[\]<>.,\/#!$%\^&\*;:{}=_()?@\s\'\-\"]/g);
    let newSplit = sw.removeStopwords(split);
    let words = [];
    let newText = "";
    for( let tmp of newSplit){
        let word = tmp.replace(/[\d+]/g,""); // remove digits
        word = stemmer(word); // stem words
        if(word.length>0){
            newText = newText + ' '+word
        }
    }
    return newText;
}

export default {
    tokenization
}