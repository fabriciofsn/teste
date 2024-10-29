export class Reverse {
  private _st: string;
  private _invertido: string;
  constructor(str: string) {
    this._st = str;
    this._invertido = '';
  }

  reverse() {

    for (let i = this._st.length - 1; i >= 0; i--) {
      this._invertido += this._st[i]
    }
    return this._invertido;
  }
}