const library = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

console.log(library.sort(function(a, b) {
  var firstComparison = a.title;
  var secondComparison = b.title;
  if (firstComparison < secondComparison) {
    return -1;
  }
  if (firstComparison > secondComparison) {
    return 1;
  }
  return 0;
}));

library.sort(function(a, b) {
  var firstComparison = a.title;
  var secondComparison = b.title;
  if (firstComparison < secondComparison) {
    return -1;
  }
  if (firstComparison > secondComparison) {
    return 1;
  }
  return 0;
});