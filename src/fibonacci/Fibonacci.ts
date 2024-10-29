export class Fibonacci {
  private _num: number;
  private _a: number;
  private _b: number;
  private _temp: number;
  constructor(num: number) {
    this._num = num;
    this._a = 0;
    this._b = 1;
  }

  isFibonacci() {
    if (this._num < 0) return 'Este número não pertence a sequência de Fibonacci';



    if (this._num === this._a || this._num === this._b) return `O número ${this._num} pertence à sequência de Fibonacci.`;

    while (this._b < this._num) {
      this._temp = this._a + this._b;
      this._a = this._b;
      this._b = this._temp;
    }

    if (this._b === this._num) {
      return `O número ${this._num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${this._num} não pertence à sequência de Fibonacci.`;
    }

  }
}