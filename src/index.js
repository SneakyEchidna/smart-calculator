class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue.toString();
    this.reg = /(\d+)$/
    this.valueOf = function () {
      return eval(this.value)
    }
  }

  add(number) {
    this.value = this.value + ` + ${number}`;
    return this
  }

  subtract(number) {
    this.value = this.value + ` - ${number}`
    return this
  }

  multiply(number) {
    this.value = this.value + ` * ${number}`;
    return this
  }

  devide(number) {
    this.value = this.value + ` / ${number}`
    return this
  }

  pow(number) {
    let matching = this.reg.exec(this.value)
    this.value.replace(this.reg, 'Math.pow(' + matching[0] + ',' + number + ')')
    return this

  }
}
module.exports = SmartCalculator;
