// Write your code here
// function Book(title, author, IBSM, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.IBSM = IBSM;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if (this.numCopies === 0) {
//     return "Out of Stock";
//   } else if (this.numCopies < 10) {
//     return "Low Stock";
//   }
//   return "In Stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

class Book {
  constructor(title, author, IBSM, numCopies) {
    this.title = title;
    this.author = author;
    this.IBSM = IBSM;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    }
    return "In Stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -=numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book ("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());

