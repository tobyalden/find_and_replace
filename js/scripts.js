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

$(document).ready(function() {

  $("#find-and-replace").submit(function(event) {
    var phrase = $("input#input-phrase").val();
    var find = $("input#input-find").val();
    var replace = $("input#input-replace").val();
    var matchCase = $("input#match-case").is(':checked')

    var output = findAndReplace(phrase, find, replace, matchCase);

    $(".output").text(output);
    $("#result").slideDown("slow");
    $(".panel").fadeIn("slow");
    event.preventDefault();
  });

});
