var findAndReplace = function(phrase, find, replace, matchCase) {
  phrase = phrase.replace(/[,.!?;:]/g, " $&");
  var splitPhrase = phrase.split(" ");
  for(var i = 0; i < splitPhrase.length; i++) {
    if(splitPhrase[i] == find ||(!matchCase && splitPhrase[i].toLowerCase() == find.toLowerCase())) {
      splitPhrase[i] = replace;
    }
  }
  phrase = splitPhrase.join(" ");
  phrase = phrase.replace(/\s+(\W)/g, "$1");
  return phrase
}
