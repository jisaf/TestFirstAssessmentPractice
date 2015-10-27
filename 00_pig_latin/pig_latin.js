function translate(phrase){
  var vowels = 'aeiou';
  var index = 0;
  var finalPhrase = [];

  phrase.split(' ').forEach(function(word){
    for(var i = 0; i < word.length; i++){
      if(vowels.indexOf(word[i]) >= 0){
        if(word[i] !== 'u' || (word[i] === 'u' && word[i-1] !== 'q')){
          index = i;
          break;
        }

      }
    }
    finalPhrase.push(word.slice(index,word.length) + word.slice(0,index) + 'ay');
  });

  return finalPhrase.join(' ');

}
