function printWinners1Fixed(inputArray) {
  // Perform a QuickSort on the array. We provide an anonymous function to do the comparisons.
  inputArray.sort((a, b) => {
    // Convert each toppings array to a string and do a string comparison
    return a.toppings.toString().localeCompare(b.toppings.toString());
  });
  let previousEmail = "";
  let previousToppingsAsString = "";
  let previousToppingCount = 0;
  let numberOfSimilarOrders = 0;
  // Iterate through the array, with "order" being each item in the array.
  inputArray.map(order => {
    let toppingsAsString = order.toppings.toString();
    if (toppingsAsString === previousToppingsAsString) {
      numberOfSimilarOrders++;
    } else {
      if (
        numberOfSimilarOrders === 1 &&
        previousToppingCount === 3 &&
        previousEmail !== ""
      ) {
        // Print out the email.
        console.log(previousEmail);
      }
      previousToppingsAsString = toppingsAsString;
      previousEmail = order.email;
      previousToppingCount = order.toppings.length;
      numberOfSimilarOrders = 1;
    }
  });
  /**
   * The fix of the bug.
   * This will check if the final order is unique
   */
  if (numberOfSimilarOrders === 1 && previousToppingCount === 3 &&previousEmail !== "") {
    // Print out the email.
    console.log(previousEmail);
  }
}

module.exports = printWinners1Fixed;
