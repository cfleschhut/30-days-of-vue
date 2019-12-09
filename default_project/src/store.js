export const store = {
  state: {
    numbers: [1, 2, 3],
  },
  addNumber(newNumber) {
    this.state.numbers.push(newNumber);
  },
  removeLastNumber() {
    this.state.numbers.pop();
  },
  reverseNumbers() {
    this.state.numbers.reverse();
  },
};
