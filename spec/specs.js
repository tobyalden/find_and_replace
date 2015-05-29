describe('findAndReplace', function() {

  it("will replace a single instance of a word in a string with another word", function() {
    expect(findAndReplace("The sun set slowly over the horizon.", "sun", "moon", true)).to.equal("The moon set slowly over the horizon.");
  });

  it("will replace all instances of a word in a string with another word", function() {
    expect(findAndReplace("The dog was a type of dog I liked.", "dog", "cat", true)).to.equal("The cat was a type of cat I liked.");
  });

  it("will replace all instances of a word in a string with another word, ignoring punctuation", function() {
    expect(findAndReplace("The dog, who belonged to another dog, was a bad dog.", "dog", "cat", true)).to.equal("The cat, who belonged to another cat, was a bad cat.");
  });

  it("will replace all instances of a word in a string with another word, ignoring casing", function() {
    expect(findAndReplace("General Dog was a fine dog.", "dog", "cat", false)).to.equal("General cat was a fine cat.");
  });



});
