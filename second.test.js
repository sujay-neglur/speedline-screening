const printWinners2 = require("./second");

describe("test the printWinners2 function", function() {
  let orders, consoleSpy;

  beforeEach(function() {
    orders = [
      { email: "example@gmail.com", toppings: ["Chicken", "Oregano"] },
      { email: "", toppings: ["Chicken", "Parmesan", "Tomatoes"] },
      { email: "jane@gmail.com", toppings: [] },
      { email: "doe@gmail.com", toppings: ["Beef", "Chicken", "Hummus"] },
      { email: "john@gmail.com", toppings: ["Beef"] },
      { email: "", toppings: ["Chicken", "Parmesan", "Tomatoes"] },
      { email: "smith@gmail.com", toppings: ["Beef", "Chicken", "Hummus"] }
    ];
    consoleSpy = jest.spyOn(console, "log");
  });
  afterEach(function() {
    orders = [];
    consoleSpy.mockClear();
  });
  
  it("should print the winners as email@example.com. andrew@gmail.com should not be printed", function(done) {
    orders = [
      { email: "email@example.com", toppings: ["Beef", "Chicken", "Tomatoes"] },
      ...orders,
      { email: "", toppings: ["Chilly", "Oregano", "Tomatoes"] },
      { email: "andrew@gmail.com", toppings: ["Chilly", "Oregano", "Tomatoes"] }
    ];
    printWinners2(orders);
    expect(consoleSpy).toHaveBeenCalledWith("email@example.com");
    /**
     * Bug for the second implementation of the algorithm as given in the file second.js
     */
    expect(consoleSpy).not.toHaveBeenCalledWith("andrew@gmail.com");
    done();
  });

  it("should print the winners as email@example.com and john@gmail.com ", function(done) {
    orders = [
      { email: "email@example.com", toppings: ["Beef", "Chicken", "Tomatoes"] },
      ...orders,
      { email: "john@gmail.com", toppings: ["Beef", "Oregano", "Tomatoes"] }
    ];
    printWinners2(orders);
    expect(consoleSpy).toHaveBeenCalledWith("email@example.com");
    expect(consoleSpy).toHaveBeenCalledWith("john@gmail.com");
    done();
  });

  it("should print the winners as email@example.com and andrew@gmail.com ", function(done) {
    orders = [
      { email: "email@example.com", toppings: ["Beef", "Chicken", "Tomatoes"] },
      ...orders,
      { email: "andrew@gmail.com", toppings: ["Chilly", "Oregano", "Tomatoes"] }
    ];
    printWinners2(orders);
    expect(consoleSpy).toHaveBeenCalledWith("email@example.com");
    /**
     * This is a bug for the first implentation of the alogrithm as given in file first.js
     * The second implementation does not have this bug.
     */
    expect(consoleSpy).toHaveBeenCalledWith("andrew@gmail.com");
    done();
  });

  it("should print the winners as email@example.com", function(done) {
    // Add the unique records to the array
    orders = [
      { email: "email@example.com", toppings: ["Beef", "Chicken", "Tomatoes"] },
    ];
    printWinners2(orders);
    expect(consoleSpy).toHaveBeenCalledWith("email@example.com");
    done();
  });


  it("should print the winners as email@example.com and andrew@gmail.com ", function(done) {
    orders = [
      { email: "email@example.com", toppings: ["Beef", "Chicken", "Tomatoes"] },
      ...orders,
      { email: "andrew@gmail.com", toppings: ["Chilly", "Oregano", "Tomatoes"] }
    ];
    printWinners2(orders);
    expect(consoleSpy).toHaveBeenCalledWith("email@example.com");
    /**
     * Bug for the first implementation of the algorithm as given in file first.js
     * This bug is not present in the second implementation.
     */
    expect(consoleSpy).toHaveBeenCalledWith("andrew@gmail.com");
    done();
  });

  it("should not print any winners if no orders are unique", function(done) {
    printWinners2(orders);
    expect(consoleSpy).not.toBeCalled();
    done();
  });

  it("should not print the winner if email is not present", function(done) {
    orders = [
      { email: "", toppings: ["Beef", "Chicken", "Tomatoes"] },
      ...orders
    ];
    printWinners2(orders);
    expect(consoleSpy).not.toHaveBeenCalled();
    done();
  });
});
