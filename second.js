function printWinners2(inputArray) {
  let hashTable = new Map();
  // Iterate through the array, with "order" being each item in the array.
  inputArray.map(order => {
    if (order.toppings.length === 3 && order.email !== "") {
      let toppingsAsString = order.toppings.toString();
      let matchingValue = hashTable.get(toppingsAsString);
      if (matchingValue) {
        // This key was already in the hash table.
        // matchingValue is a reference to the object in the hashtable.
        matchingValue.duplicate = true;
      } else {
        // Insert into the hash table, using the toppings as the key and an object containing the email as the value.
        hashTable.set(toppingsAsString, {
          email: order.email,
          duplicate: false
        });
      }
    }
  });
  // Iterate through the values in the hash table, with "value" being each value.
  hashTable.forEach(value => {
    if (!value.duplicate) {
      // Print out the email.
      console.log(value.email);
    }
  });
}

module.exports = printWinners2;